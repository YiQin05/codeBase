package getPoint.getCircle;
import java.lang.Math;

public class getCircle {
	public double a,b,c;
	public getCircle(double[] arr, double r){
		this.a = r*r;
		this.b = arr[0];
		this.c = arr[1];
	}
	public double getRule(double[] arr, double r, double x) {
		double squareR = r*r;
		double anSquare = this.getAnd(squareR, x, arr[0]);
		double Y = Math.sqrt(anSquare)+arr[1];
		return Y;
	}
	public double getAnd(double squareR,double x, double x0) {
		return squareR-(x-x0)*(x-x0);
	}
	public String getRule(double[] arr, double r) {
		double squareR = r*r;
		String strX = "Math.sqrt("+String.valueOf(squareR)+"-(x-"+String.valueOf(arr[0])+")*(x-"+String.valueOf(arr[0])+"))+"+String.valueOf(arr[1]);
		return strX;
	}
}
