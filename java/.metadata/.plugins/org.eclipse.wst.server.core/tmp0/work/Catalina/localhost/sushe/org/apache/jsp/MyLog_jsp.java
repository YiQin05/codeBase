/*
 * Generated by the Jasper component of Apache Tomcat
 * Version: Apache Tomcat/7.0.56
 * Generated at: 2018-12-21 03:37:46 UTC
 * Note: The last modified time of this file was set to
 *       the last modified time of the source file after
 *       generation to assist with modification tracking.
 */
package org.apache.jsp;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.jsp.*;
import java.util.*;
import java.util.*;

public final class MyLog_jsp extends org.apache.jasper.runtime.HttpJspBase
    implements org.apache.jasper.runtime.JspSourceDependent {

  private static final javax.servlet.jsp.JspFactory _jspxFactory =
          javax.servlet.jsp.JspFactory.getDefaultFactory();

  private static java.util.Map<java.lang.String,java.lang.Long> _jspx_dependants;

  static {
    _jspx_dependants = new java.util.HashMap<java.lang.String,java.lang.Long>(1);
    _jspx_dependants.put("/Left.jsp", Long.valueOf(1367134234780L));
  }

  private org.apache.jasper.runtime.TagHandlerPool _005fjspx_005ftagPool_005fs_005fiterator_0026_005fvalue_005fid;

  private javax.el.ExpressionFactory _el_expressionfactory;
  private org.apache.tomcat.InstanceManager _jsp_instancemanager;

  public java.util.Map<java.lang.String,java.lang.Long> getDependants() {
    return _jspx_dependants;
  }

  public void _jspInit() {
    _005fjspx_005ftagPool_005fs_005fiterator_0026_005fvalue_005fid = org.apache.jasper.runtime.TagHandlerPool.getTagHandlerPool(getServletConfig());
    _el_expressionfactory = _jspxFactory.getJspApplicationContext(getServletConfig().getServletContext()).getExpressionFactory();
    _jsp_instancemanager = org.apache.jasper.runtime.InstanceManagerFactory.getInstanceManager(getServletConfig());
  }

  public void _jspDestroy() {
    _005fjspx_005ftagPool_005fs_005fiterator_0026_005fvalue_005fid.release();
  }

  public void _jspService(final javax.servlet.http.HttpServletRequest request, final javax.servlet.http.HttpServletResponse response)
        throws java.io.IOException, javax.servlet.ServletException {

    final javax.servlet.jsp.PageContext pageContext;
    javax.servlet.http.HttpSession session = null;
    final javax.servlet.ServletContext application;
    final javax.servlet.ServletConfig config;
    javax.servlet.jsp.JspWriter out = null;
    final java.lang.Object page = this;
    javax.servlet.jsp.JspWriter _jspx_out = null;
    javax.servlet.jsp.PageContext _jspx_page_context = null;


    try {
      response.setContentType("text/html;charset=UTF-8");
      pageContext = _jspxFactory.getPageContext(this, request, response,
      			null, true, 8192, true);
      _jspx_page_context = pageContext;
      application = pageContext.getServletContext();
      config = pageContext.getServletConfig();
      session = pageContext.getSession();
      out = pageContext.getOut();
      _jspx_out = out;

      out.write('\r');
      out.write('\n');

String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";

      out.write("\r\n");
      out.write("\r\n");
      out.write("<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\">\r\n");
      out.write("<html>\r\n");
      out.write("  <head>\r\n");
      out.write("    <title>校园宿舍管理系统</title>\r\n");
      out.write("    <base href=\"");
      out.print(basePath);
      out.write("\">\r\n");
      out.write("    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\r\n");
      out.write("    <link href=\"Style/Style.css\" rel=\"stylesheet\" type=\"text/css\" />\r\n");
      out.write("</head>\r\n");
      out.write("<script language=\"JavaScript\">\r\n");
      out.write("\r\n");
      out.write("\r\n");
      out.write("function mycheck(){\r\n");
      out.write("   if(isNull(form1.Student_Username.value)){  \r\n");
      out.write("   alert(\"请输入学号！\"); \r\n");
      out.write("   return false;\r\n");
      out.write("   }\r\n");
      out.write("   if(isNull(form1.Student_Password.value)){\r\n");
      out.write("   alert(\"请输入密码！\");\r\n");
      out.write("   return false;\r\n");
      out.write("   }\r\n");
      out.write("   if(isNull(form1.Student_Password2.value)){\r\n");
      out.write("   alert(\"请输入重复密码！\");\r\n");
      out.write("   return false;\r\n");
      out.write("   }\r\n");
      out.write("   if (document.form1.Student_Password.value != document.form1.Student_Password2.value) { \r\n");
      out.write("   alert(\"您两次输入的新密码不一致！请重新输入！\"); \r\n");
      out.write("   return false; \r\n");
      out.write("   }  \r\n");
      out.write("   if(isNull(form1.Student_Name.value)){\r\n");
      out.write("   alert(\"请输入姓名！\");\r\n");
      out.write("   return false;\r\n");
      out.write("   }\r\n");
      out.write("   if(isNull(form1.Student_Sex.value)){\r\n");
      out.write("   alert(\"请选择性别！\");\r\n");
      out.write("   return false;\r\n");
      out.write("   }\r\n");
      out.write("   if(isNull(form1.Student_Class.value)){\r\n");
      out.write("   alert(\"请输入班级！\");\r\n");
      out.write("   return false;\r\n");
      out.write("   }\r\n");
      out.write("}\r\n");
      out.write("\r\n");
      out.write("function isNull(str){\r\n");
      out.write("if ( str == \"\" ) return true;\r\n");
      out.write("var regu = \"^[ ]+$\";\r\n");
      out.write("var re = new RegExp(regu);\r\n");
      out.write("return re.test(str);\r\n");
      out.write("}\r\n");
      out.write("   \r\n");
      out.write("   \r\n");
      out.write("</script>\r\n");
      out.write("<body>\r\n");
      out.write("<center>\r\n");
      out.write("  <table width=\"900\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\">\r\n");
      out.write("    <tr>\r\n");
      out.write("      <td height=\"60\" bgcolor=\"#E6F5FF\" style=\"color:#06F; font-size:19px; font-weight:bolder; padding-left:50px;\">校园宿舍管理系统</td>\r\n");
      out.write("    </tr>\r\n");
      out.write("    <tr>\r\n");
      out.write("      <td height=\"30\" background=\"Images/MenuBg.jpg\">&nbsp;</td>\r\n");
      out.write("    </tr>\r\n");
      out.write("    <tr>\r\n");
      out.write("      <td height=\"500\" align=\"center\" valign=\"top\"><table width=\"900\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\">\r\n");
      out.write("        <tr>\r\n");
      out.write("          <td width=\"191\" height=\"500\" align=\"center\" valign=\"top\" background=\"Images/leftbg.jpg\">\r\n");
      out.write("          ");
      out.write("\r\n");
      out.write("<link href=\"Style/Style.css\" rel=\"stylesheet\" type=\"text/css\" />\r\n");
      out.write("<table width=\"155\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\">\r\n");
      out.write("            <tr>\r\n");
      out.write("              <td height=\"31\" align=\"center\" background=\"Images/left1.jpg\"><strong>系统选项</strong></td>\r\n");
      out.write("            </tr>\r\n");
      out.write("            <tr>\r\n");
      out.write("              <td height=\"50\" align=\"center\" valign=\"top\"><table width=\"150\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\">\r\n");
      out.write("                <tr>\r\n");
      out.write("                  <td height=\"5\" align=\"center\"><img src=\"Images/ic.gif\" width=\"1\" height=\"1\"></td>\r\n");
      out.write("                </tr>\r\n");
      out.write("                <tr>\r\n");
      out.write("                  <td height=\"30\" align=\"center\" background=\"Images/left2.jpg\" style=\"text-align:left; padding-left:40px;\"><a href=\"Index.jsp\">后台首页</a></td>\r\n");
      out.write("                </tr>\r\n");
      out.write("                <tr>\r\n");
      out.write("                  <td height=\"5\" align=\"center\"><img src=\"Images/ic.gif\" width=\"1\" height=\"1\"></td>\r\n");
      out.write("                </tr>\r\n");
      out.write("                ");
if(session.getAttribute("type").toString().equals("1")){
      out.write("\r\n");
      out.write("                <tr>\r\n");
      out.write("                  <td height=\"30\" align=\"center\" background=\"Images/left2.jpg\" style=\"text-align:left; padding-left:40px;\"><a href=\"TeacherManager.action\">楼宇管理员管理</a></td>\r\n");
      out.write("                </tr>\r\n");
      out.write("                <tr>\r\n");
      out.write("                  <td height=\"5\" align=\"center\"><img src=\"Images/ic.gif\" width=\"1\" height=\"1\"></td>\r\n");
      out.write("                </tr>\r\n");
      out.write("                <tr>\r\n");
      out.write("                  <td height=\"30\" align=\"center\" background=\"Images/left2.jpg\" style=\"text-align:left; padding-left:40px;\"><a href=\"StudentManager.action\">学生管理</a></td>\r\n");
      out.write("                </tr>\r\n");
      out.write("                <tr>\r\n");
      out.write("                  <td height=\"5\" align=\"center\"><img src=\"Images/ic.gif\" width=\"1\" height=\"1\"></td>\r\n");
      out.write("                </tr>\r\n");
      out.write("                <tr>\r\n");
      out.write("                  <td height=\"30\" align=\"center\" background=\"Images/left2.jpg\" style=\"text-align:left; padding-left:40px;\"><a href=\"BuildingManager.action\">楼宇管理</a></td>\r\n");
      out.write("                </tr>\r\n");
      out.write("                <tr>\r\n");
      out.write("                  <td height=\"5\" align=\"center\"><img src=\"Images/ic.gif\" width=\"1\" height=\"1\"></td>\r\n");
      out.write("                </tr>\r\n");
      out.write("                <tr>\r\n");
      out.write("                  <td height=\"30\" align=\"center\" background=\"Images/left2.jpg\" style=\"text-align:left; padding-left:40px;\"><a href=\"DomitoryManager.action\">宿舍管理</a></td>\r\n");
      out.write("                </tr>\r\n");
      out.write("                <tr>\r\n");
      out.write("                  <td height=\"5\" align=\"center\"><img src=\"Images/ic.gif\" width=\"1\" height=\"1\"></td>\r\n");
      out.write("                </tr>\r\n");
      out.write("                <tr>\r\n");
      out.write("                  <td height=\"30\" align=\"center\" background=\"Images/left2.jpg\" style=\"text-align:left; padding-left:40px;\"><a href=\"StudentRZ.action\">学生入住登记</a></td>\r\n");
      out.write("                </tr>\r\n");
      out.write("                <tr>\r\n");
      out.write("                  <td height=\"5\" align=\"center\"><img src=\"Images/ic.gif\" width=\"1\" height=\"1\"></td>\r\n");
      out.write("                </tr>\r\n");
      out.write("                <tr>\r\n");
      out.write("                  <td height=\"30\" align=\"center\" background=\"Images/left2.jpg\" style=\"text-align:left; padding-left:40px;\"><a href=\"StudentTH.jsp\">学生寝室调换</a></td>\r\n");
      out.write("                </tr>\r\n");
      out.write("                <tr>\r\n");
      out.write("                  <td height=\"5\" align=\"center\"><img src=\"Images/ic.gif\" width=\"1\" height=\"1\"></td>\r\n");
      out.write("                </tr>\r\n");
      out.write("                <tr>\r\n");
      out.write("                  <td height=\"30\" align=\"center\" background=\"Images/left2.jpg\" style=\"text-align:left; padding-left:40px;\"><a href=\"StudentQC.jsp\">学生迁出登记</a></td>\r\n");
      out.write("                </tr>\r\n");
      out.write("                <tr>\r\n");
      out.write("                  <td height=\"5\" align=\"center\"><img src=\"Images/ic.gif\" width=\"1\" height=\"1\"></td>\r\n");
      out.write("                </tr>\r\n");
      out.write("                <tr>\r\n");
      out.write("                  <td height=\"30\" align=\"center\" background=\"Images/left2.jpg\" style=\"text-align:left; padding-left:40px;\"><a href=\"AdminLog.action\">学生缺寝记录</a></td>\r\n");
      out.write("                </tr>\r\n");
      out.write("                <tr>\r\n");
      out.write("                  <td height=\"5\" align=\"center\"><img src=\"Images/ic.gif\" width=\"1\" height=\"1\"></td>\r\n");
      out.write("                </tr>\r\n");
      out.write("                <tr>\r\n");
      out.write("                  <td height=\"30\" align=\"center\" background=\"Images/left2.jpg\" style=\"text-align:left; padding-left:40px;\"><a href=\"OutList.action\">迁出记录</a></td>\r\n");
      out.write("                </tr>\r\n");
      out.write("                <tr>\r\n");
      out.write("                  <td height=\"5\" align=\"center\"><img src=\"Images/ic.gif\" width=\"1\" height=\"1\"></td>\r\n");
      out.write("                </tr>\r\n");
      out.write("                ");
}
      out.write("\r\n");
      out.write("                ");
if(session.getAttribute("type").toString().equals("2")){
      out.write("\r\n");
      out.write("                <tr>\r\n");
      out.write("                  <td height=\"30\" align=\"center\" background=\"Images/left2.jpg\" style=\"text-align:left; padding-left:40px;\"><a href=\"MyStudent.action\">学生管理</a></td>\r\n");
      out.write("                </tr>\r\n");
      out.write("                <tr>\r\n");
      out.write("                  <td height=\"5\" align=\"center\"><img src=\"Images/ic.gif\" width=\"1\" height=\"1\"></td>\r\n");
      out.write("                </tr>\r\n");
      out.write("                <tr>\r\n");
      out.write("                  <td height=\"30\" align=\"center\" background=\"Images/left2.jpg\" style=\"text-align:left; padding-left:40px;\"><a href=\"MyLog.action\">学生缺寝记录</a></td>\r\n");
      out.write("                </tr>\r\n");
      out.write("                <tr>\r\n");
      out.write("                  <td height=\"5\" align=\"center\"><img src=\"Images/ic.gif\" width=\"1\" height=\"1\"></td>\r\n");
      out.write("                </tr>\r\n");
      out.write("                ");
}
      out.write("\r\n");
      out.write("                ");
if(session.getAttribute("type").toString().equals("3")){
      out.write("\r\n");
      out.write("                <tr>\r\n");
      out.write("                  <td height=\"30\" align=\"center\" background=\"Images/left2.jpg\" style=\"text-align:left; padding-left:40px;\"><a href=\"StudentLog.action\">我的缺寝记录</a></td>\r\n");
      out.write("                </tr>\r\n");
      out.write("                <tr>\r\n");
      out.write("                  <td height=\"5\" align=\"center\"><img src=\"Images/ic.gif\" width=\"1\" height=\"1\"></td>\r\n");
      out.write("                </tr>\r\n");
      out.write("                ");
}
      out.write("\r\n");
      out.write("                <tr>\r\n");
      out.write("                  <td height=\"30\" align=\"center\" background=\"Images/left2.jpg\" style=\"text-align:left; padding-left:40px;\"><a href=\"PasswordUpdate.jsp\">修改密码</a></td>\r\n");
      out.write("                </tr>\r\n");
      out.write("                <tr>\r\n");
      out.write("                  <td height=\"5\" align=\"center\"><img src=\"Images/ic.gif\" width=\"1\" height=\"1\"></td>\r\n");
      out.write("                </tr>\r\n");
      out.write("                <tr>\r\n");
      out.write("                  <td height=\"30\" align=\"center\" background=\"Images/left2.jpg\" style=\"text-align:left; padding-left:40px;\"><a href=\"Quit.action\" onclick=\"return confirm('确定要退出系统吗？')\">退出系统</a></td>\r\n");
      out.write("                </tr>\r\n");
      out.write("              </table>\r\n");
      out.write("              </td>\r\n");
      out.write("            </tr>\r\n");
      out.write("          </table>");
      out.write("\r\n");
      out.write("          </td>\r\n");
      out.write("          <td width=\"709\" align=\"center\" valign=\"top\" bgcolor=\"#F6F9FE\"><table width=\"709\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\">\r\n");
      out.write("            <tr>\r\n");
      out.write("              <td height=\"30\" background=\"Images/mainMenuBg.jpg\" style=\"padding-left:25px;\">学生缺寝记录</td>\r\n");
      out.write("            </tr>\r\n");
      out.write("            <tr>\r\n");
      out.write("              <td height=\"470\" align=\"center\" valign=\"top\" bgcolor=\"#F6F9FE\">\r\n");
      out.write("                <table width=\"100%\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\">\r\n");
      out.write("                  <tr>\r\n");
      out.write("                    <td width=\"100%\" height=\"30\" align=\"center\" style=\"color:red;\">请先选择楼宇</td>\r\n");
      out.write("                  </tr>\r\n");
      out.write("                  ");
      if (_jspx_meth_s_005fiterator_005f0(_jspx_page_context))
        return;
      out.write("\r\n");
      out.write("                </table>\r\n");
      out.write("              </td>\r\n");
      out.write("            </tr>\r\n");
      out.write("          </table></td>\r\n");
      out.write("        </tr>\r\n");
      out.write("      </table></td>\r\n");
      out.write("    </tr>\r\n");
      out.write("    <tr>\r\n");
      out.write("      <td height=\"35\" background=\"Images/bootBg.jpg\">&nbsp;</td>\r\n");
      out.write("    </tr>\r\n");
      out.write("  </table>\r\n");
      out.write("\r\n");
      out.write("</center>\r\n");
      out.write("</body>\r\n");
      out.write("</html>\r\n");
    } catch (java.lang.Throwable t) {
      if (!(t instanceof javax.servlet.jsp.SkipPageException)){
        out = _jspx_out;
        if (out != null && out.getBufferSize() != 0)
          try {
            if (response.isCommitted()) {
              out.flush();
            } else {
              out.clearBuffer();
            }
          } catch (java.io.IOException e) {}
        if (_jspx_page_context != null) _jspx_page_context.handlePageException(t);
        else throw new ServletException(t);
      }
    } finally {
      _jspxFactory.releasePageContext(_jspx_page_context);
    }
  }

  private boolean _jspx_meth_s_005fiterator_005f0(javax.servlet.jsp.PageContext _jspx_page_context)
          throws java.lang.Throwable {
    javax.servlet.jsp.PageContext pageContext = _jspx_page_context;
    javax.servlet.jsp.JspWriter out = _jspx_page_context.getOut();
    //  s:iterator
    org.apache.struts2.views.jsp.IteratorTag _jspx_th_s_005fiterator_005f0 = (org.apache.struts2.views.jsp.IteratorTag) _005fjspx_005ftagPool_005fs_005fiterator_0026_005fvalue_005fid.get(org.apache.struts2.views.jsp.IteratorTag.class);
    _jspx_th_s_005fiterator_005f0.setPageContext(_jspx_page_context);
    _jspx_th_s_005fiterator_005f0.setParent(null);
    // /MyLog.jsp(83,18) name = id type = java.lang.String reqTime = false required = false fragment = false deferredValue = false expectedTypeName = null deferredMethod = false methodSignature = null
    _jspx_th_s_005fiterator_005f0.setId("aa");
    // /MyLog.jsp(83,18) name = value type = java.lang.String reqTime = false required = false fragment = false deferredValue = false expectedTypeName = null deferredMethod = false methodSignature = null
    _jspx_th_s_005fiterator_005f0.setValue("list");
    int _jspx_eval_s_005fiterator_005f0 = _jspx_th_s_005fiterator_005f0.doStartTag();
    if (_jspx_eval_s_005fiterator_005f0 != javax.servlet.jsp.tagext.Tag.SKIP_BODY) {
      if (_jspx_eval_s_005fiterator_005f0 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
        out = _jspx_page_context.pushBody();
        _jspx_th_s_005fiterator_005f0.setBodyContent((javax.servlet.jsp.tagext.BodyContent) out);
        _jspx_th_s_005fiterator_005f0.doInitBody();
      }
      do {
        out.write("\r\n");
        out.write("                  <tr>\r\n");
        out.write("                    <td height=\"30\" align=\"center\">\r\n");
        out.write("                      <a href=\"MyLogList.action?Building_ID=");
        out.write((java.lang.String) org.apache.jasper.runtime.PageContextImpl.proprietaryEvaluate("${TB_BuildingID}", java.lang.String.class, (javax.servlet.jsp.PageContext)_jspx_page_context, null, false));
        out.write('"');
        out.write('>');
        out.write((java.lang.String) org.apache.jasper.runtime.PageContextImpl.proprietaryEvaluate("${Building_Name}", java.lang.String.class, (javax.servlet.jsp.PageContext)_jspx_page_context, null, false));
        out.write("</a>\r\n");
        out.write("                    </td>\r\n");
        out.write("                  </tr>\r\n");
        out.write("                  ");
        int evalDoAfterBody = _jspx_th_s_005fiterator_005f0.doAfterBody();
        if (evalDoAfterBody != javax.servlet.jsp.tagext.BodyTag.EVAL_BODY_AGAIN)
          break;
      } while (true);
      if (_jspx_eval_s_005fiterator_005f0 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
        out = _jspx_page_context.popBody();
      }
    }
    if (_jspx_th_s_005fiterator_005f0.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005fs_005fiterator_0026_005fvalue_005fid.reuse(_jspx_th_s_005fiterator_005f0);
      return true;
    }
    _005fjspx_005ftagPool_005fs_005fiterator_0026_005fvalue_005fid.reuse(_jspx_th_s_005fiterator_005f0);
    return false;
  }
}
