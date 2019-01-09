package helloSort;

public class helloSort {
	public int arr[] = {35,156,154,26,123,45,1,45,58,48};
	public int[] newSort(int star, int end) {
		int current = this.arr[star];
		int firstStar = star;
		int firstEnd = end;
//		boolean flag = false;
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
		int reArr[] = {firstStar,firstEnd,star};
		return reArr;
	}
	public void starSort(int arr[]) {
		if(arr[0]<arr[1]) {
			starSort(this.newSort(arr[0], arr[2]));
			if(arr[2]<this.arr.length-1) {
				starSort(this.newSort(++arr[2], arr[1]));
			}
		}
	}
	public static void main (String[] args) {
		helloSort hello = new helloSort();
		hello.starSort(hello.newSort(0, hello.arr.length-1));
//		System.out.println(hello.arr);
		for(int i=0,j=hello.arr.length;i<j;i++) {
			System.out.print(hello.arr[i]+" ");
		}
	}

}
