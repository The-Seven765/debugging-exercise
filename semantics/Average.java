public class Average {
    public static void main(String[] args) {
        int[] numbers = {10, 20, 30, 40, 50};
        int sum; // Variable declared but not initialized
        double average;

        for (int number : numbers) {
            sum += number; // Using uninitialized variable
        }

        average = sum / (double) numbers.length; // Potential incorrect behavior
        System.out.println("The average is: " + average);
    }
}
