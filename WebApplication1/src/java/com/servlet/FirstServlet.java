package com.servlet;

import java.io.IOException;
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
