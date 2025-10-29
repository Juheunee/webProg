import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
    	Scanner scanner = new Scanner(System.in);
    
    	int A = scanner.nextInt();
    	int B = scanner.nextInt();
    	double avg = (A + B) / 2.0;
    	
    	System.out.printf(A + B + " %.1f", avg);
    }

}
