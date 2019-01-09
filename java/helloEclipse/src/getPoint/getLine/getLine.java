package getPoint.getLine;

public class getLine {
	public double a,b;
	public getLine(double[] arr1,double[] arr2){
		double subY = arr1[1] - arr2[1];
		double subX = arr1[0] - arr2[0];
		if (subX==0) {
			this.a = 0;
			this.b = 0;
		} else {
			this.a = subY/subX;
			this.b = -(arr1[0]*subY)/subX + arr1[1];
		}
	}
	public String getLineRule(double[] arr1,double[] arr2) {
		double subY = arr1[1] - arr2[1];
		double subX = arr1[0] - arr2[0];
//		double x = -(arr2[0]*subY)/subX + arr2[1];
//		System.out.println("---------------------------------------------------");
//		System.out.println("subY:"+ subY);
//		System.out.println("subX:"+ subX);
//		System.out.println(-arr2[0]*subY/subX + arr2[1]);
//		System.out.println(x);
//		String resultY = "((x-"+String.valueOf(arr2[0])+")*"+String.valueOf(subY)+")/"+String.valueOf(subX)+"+"+String.valueOf(arr2[1]);
		String resultY = String.valueOf(subY/subX)+"*x+"+String.valueOf(-(arr1[0]*subY)/subX + arr1[1]);
		return resultY;
	}
	public double getLineRule(double[] arr1,double[] arr2,double x) {
		double subY = arr1[1] - arr2[1];
		double subX = arr1[0] - arr2[0];
		double result = ((x-arr2[0])*subY)/subX + arr2[1];
		return result;
	}
}
