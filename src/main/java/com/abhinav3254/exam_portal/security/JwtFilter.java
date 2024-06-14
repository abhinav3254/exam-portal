package com.abhinav3254.exam_portal.security;

import com.abhinav3254.exam_portal.exception.CustomException;
import io.jsonwebtoken.Claims;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Objects;


@Component
public class JwtFilter extends OncePerRequestFilter {

    @Autowired
    private JwtUtils jwtUtils;

    @Autowired
    private CustomUserDetails customUserDetails;

    String userName = null;

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        // checking the route
        if (request.getServletPath().matches("/auth/login|/auth/register")) {
            filterChain.doFilter(request,response);
        } else {
            String token = null;
            Cookie[] cookies = request.getCookies();
            for (Cookie cookie : cookies) {
                if(cookie.getName().equals("token")) {
                    token = cookie.getValue();
                }
            }
            if (Objects.isNull(token) && Objects.isNull(SecurityContextHolder.getContext().getAuthentication())) throw new CustomException("Auth failed", HttpStatus.FORBIDDEN);
            userName = jwtUtils.extractUsername(token);
            Claims claims = jwtUtils.extractAllClaims(token);
            UserDetails userDetails = customUserDetails.loadUserByUsername(userName);
            if (jwtUtils.validateToken(token,userDetails)) {
                UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken = new UsernamePasswordAuthenticationToken(token,null, userDetails.getAuthorities());
                usernamePasswordAuthenticationToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
                SecurityContextHolder.getContext().setAuthentication(usernamePasswordAuthenticationToken);
            }
        }

        filterChain.doFilter(request, response);

    }

    public Integer getUserId() {
        return Integer.parseInt(userName.trim());
    }

}
