package helloEclipse;

public class HelloWorld {
	public int arr[] = {12,565,89,45,12,35,48,23};
	public int newSort(int star, int end) {
		int current = this.arr[star];
		while(star < end){
			if(current == this.arr[star]) {
				if(current > this.arr[end]) {
					int p = this.arr[star];
					this.arr[star] = this.arr[end];
					this.arr[end] = p;
					current = this.arr[end];
					star++;
				} else {
					end--;
				}
			} else {
				if(current < this.arr[star]) {
					int p = this.arr[star];
					this.arr[star] = this.arr[end];
					this.arr[end] = p;
					current = this.arr[star];
					end--;
				} else {
					star++;
				}
			}
		}
		return star;
	}
	public void starSort(int star, int end) {
		if(star<end) {
			int current = this.newSort(star,end);
			starSort(star,current-1);
			starSort(current+1,end);
		}
	}
	public static void main (String[] args) {
		HelloWorld hello = new HelloWorld();
		hello.starSort(0, hello.arr.length-1);
//		System.out.println(hello.arr);
		for(int i=0,j=hello.arr.length;i<j;i++) {
			System.out.print(hello.arr[i]+" ");
		}
	}

}
