// Get references to HTML elements
const num1Input = document.getElementById('num1');
const num2Input = document.getElementById('num2');
const calculateButton = document.getElementById('calculate');
const resultParagraph = document.getElementById('result');
// Add an event listener for the button click
calculateButton.addEventListener('click', () => {
const num1 = num1Input.value;
    const num2 = num2Input.value;

    const result = num1 - num2;

    resultParagraph.textContent = `Result: ${result}`;
});
