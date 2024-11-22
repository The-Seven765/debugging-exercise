public class Min {
    public static void main(String[] args) {
        int[] numbers = {3, 5, 7, 2, 8};
        int max = 0;

        for (int i = 0; i < numbers.length; i++) {
            if (numbers[i] < max) {
                max = numbers[i];
            }
        }

        System.out.println("Maximum number: " + max);
    }
}
