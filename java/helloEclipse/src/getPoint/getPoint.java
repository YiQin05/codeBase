package getPoint;
import getPoint.getCircle.*;
import getPoint.getLine.*;
import java.lang.Math;
public class getPoint {
	public static void main(String args[]) {
		double[] point = {3.00d,3.00d};
		getCircle circle = new getCircle(point,3.00d);
		String ruleString = circle.getRule(point,3.00d);
		double ruleResult = circle.getRule(point,3.00d,3.00d);
		System.out.println(ruleString);
		System.out.println(ruleResult);
		double[] linePoint1 = {3,0}; // 直线点1
		double[] linePoint2 = {6.00d,0.00d}; // 直线点2
		getLine line = new getLine(linePoint1, linePoint2);
		String lineString = line.getLineRule(linePoint1, linePoint2);
		double lineResult = line.getLineRule(linePoint1, linePoint2,5.00d);
		System.out.println("---------------------------------------------------");
		System.out.println(lineString);
		System.out.println(lineResult);
		double a,b,c,d,e;
		a = circle.a;
		b = circle.b;
		c = circle.c;
		d = line.a;
		e = line.b;
		double theA = d*d+1;
		double theB = 2*(e-c)*d-2*b;
		double theC = (e-c)*(e-c)+b*b-a;
		double result1 = (-theB + Math.sqrt(theB*theB - 4*theA*theC))/2*theA;
		double result2 = (-theB - Math.sqrt(theB*theB - 4*theA*theC))/2*theA;
		System.out.println("---------------------------------------------------");
		System.out.println("a:"+a);
		System.out.println("b:"+b);
		System.out.println("c:"+c);
		System.out.println("d:"+d);
		System.out.println("e:"+e);
		System.out.println("theA:"+theA);
		System.out.println("theB:"+theB);
		System.out.println("theC:"+theC);
		System.out.println(theB*theB - 4*theA*theC);
		if (theB*theB - 4*theA*theC>=0) {
			System.out.println("第一个交点的x:"+result1);
			System.out.println("第二个交点的x:"+result2);
		}else {
			System.out.println("圆与该直线不相交！");
		}
		
	}
}
