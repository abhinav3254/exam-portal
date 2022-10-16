package com.pac;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.Date;
import javax.servlet.*;
import javax.servlet.http.*;
public class RegisterServlet extends HttpServlet {
    @Override
    public void doPost (HttpServletRequest request , HttpServletResponse response) throws IOException , ServletException {
        response.setContentType("text/html");
        PrintWriter out = response.getWriter();
        out.println("Hello From Abhinav Jha");
        out.println(new Date().toString());
        String name = request.getParameter("userName");
        String password = request.getParameter("userPassword");
        String email = request.getParameter("userEmail");
        String gender = request.getParameter("userGender");
        String userCourse = request.getParameter("userCourse");
        String condition = request.getParameter("condition");
        
        out.println(condition);
        
        if (condition==null) {
            out.println("Agree to Terms and Conditions");
        } else {
        out.println("user name:- "+name);
        out.println("user email:- "+email);
        out.println("user password:- "+password);
        out.println("user gender:- "+gender);
        out.println("user user Course:- "+userCourse);        
        }
    }
}
