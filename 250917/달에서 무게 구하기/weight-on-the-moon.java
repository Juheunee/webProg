public class Main {
    public static void main(String[] args) {
        // Please write your code here.
        int weight = 13;
        double gravityRate = 0.165;

        double result = weight * gravityRate;

        System.out.printf(weight + " * %.6f = %.6f", gravityRate, result);
    }
}