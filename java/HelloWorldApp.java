public class HelloWorldApp {
    public static void main ( String args[] ) {
        getNum(300);
    }
    static int getNum(int n) {
        int x = 0;
        do {
            n/= 10;
            x++;
        } while (n!=0);
        System.out.println(x);
        return x;
    }
}