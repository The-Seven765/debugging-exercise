// Get references to HTML elements
const num1Input = document.getElementById('num1');
const num2Input = document.getElementById('num2');
const calculateButton = document.getElementById('calculate');
const resultParagraph = document.getElementById('result');
// Add an event listener for the button click
calculateButton.addEventListener('click', () => {
    // Get input values as they are (string format)
debugger;
const num1 = num1Input.value;
    const num2 = num2Input.value;

    // Subtract the second number from the first without validation
    const result = num1 - num2;

    // Display the result
    resultParagraph.textContent = `Result: ${result}`;
});
