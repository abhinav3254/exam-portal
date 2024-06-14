package com.abhinav3254.exam_portal.security;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.stereotype.Component;
import org.springframework.web.cors.CorsConfiguration;


@SuppressWarnings("deprecation")
@Component
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    @Autowired
    private JwtFilter jwtFilter;

    @Autowired
    private CustomUserDetails userDetails;

    @Override
    protected void configure(AuthenticationManagerBuilder authenticationManagerBuilder) throws Exception {
        authenticationManagerBuilder.userDetailsService(userDetails);
    }

    @Bean
    public PasswordEncoder passwordEncoder() { return new BCryptPasswordEncoder(); }


    @Bean
    @Override
    public AuthenticationManager authenticationManager() throws Exception {
        return super.authenticationManagerBean();
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {

        // Configure Cross-Origin Resource Sharing (CORS)
        http.cors().configurationSource(RequestBody -> new CorsConfiguration().applyPermitDefaultValues())
                .and()
                // Disable CSRF protection
                .csrf().disable()
                .authorizeRequests()
                // Define authorization rules for endpoints
                .antMatchers("/auth/register","/auth/login").permitAll()
                // Allow unauthenticated access to signup and login
                .anyRequest()
                // Require authentication for all other requests
                .authenticated()
                // Configure exception handling
                .and().exceptionHandling()
                .and()
                .sessionManagement()
                // Configure stateless sessions
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS);

        // Add the custom JWT filter before the default UsernamePasswordAuthenticationFilter
        http.addFilterBefore(jwtFilter, UsernamePasswordAuthenticationFilter.class);

    }

}
