package com.register;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.Date;
import javax.servlet.*;
import javax.servlet.http.*;

public class RegisterServlet extends HttpServlet{
    @Override
public void doPost(HttpServletRequest request , HttpServletResponse response) throws ServletException , IOException {
    response.setContentType("text/html");
    PrintWriter out = response.getWriter();
    out.println(new Date().toString());
    String name = request.getParameter("userName");
    String password = request.getParameter("userPassword");
    String email = request.getParameter("userEmail");
    String gender = request.getParameter("userGender");
    String course = request.getParameter("userCourse");
    String cond = request.getParameter("condition");
    if (cond!=null) {
        out.println("<h2> name :- "+name+"</h2>");
        out.println("<h2> password :- "+password+"</h2>");
        out.println("<h2> email :- "+email+"</h2>");
        out.println("<h2> gender :- "+gender+"</h2>");
        out.println("<h2> course :- "+course+"</h2>");
        out.println("<h2> cond :- "+cond+"</h2>");
    } else{
    out.println("<h2>Accept the Terms and Conditions</h2>");
    }
}    
}