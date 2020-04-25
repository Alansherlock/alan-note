public class intGetMaxNum {
    public static void main ( String args[] ) {
        int b = getMaxNum(165);
        System.out.println(b);
    }
    static int getMaxNum(int n) {
        int c = 0,d;
        while (n>0) {
            d = n%10;
            if(d>c) {
                c = d;
                n/= 10;
            }
        }
        return c;
    }
}