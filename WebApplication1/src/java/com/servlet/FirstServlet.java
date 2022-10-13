package com.servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.Date;
import javax.servlet.*;
public class FirstServlet implements Servlet{
//    Life cycle methods
    
    ServletConfig conf;
    
    @Override
    public void init(ServletConfig config) {
        this.conf = config;
        System.out.println("creatting the object .....");
    }
    @Override
    public void service (ServletRequest req , ServletResponse res)  throws ServletException, IOException {
        System.out.println("Servicing.........................");
//        set the content type of the res
        res.setContentType("text/html");
        PrintWriter out = res.getWriter();
        out.println("<h1>This is my output from servlet method</h1>");
                out.println("<h1>Today date and time is "+new Date().toString()+"</h1>");
    }
    
    @Override
    public void destroy() {
        System.out.println("Going to destroy servlet object");
    }
    
//    Non life cycle method
    @Override
    public ServletConfig getServletConfig () {
    return this.conf; 
          }
    @Override
    public String getServletInfo() {
    return "this servlet created by abhinav Jha";
    }    
}
