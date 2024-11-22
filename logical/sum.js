document.getElementById("calculateSum").addEventListener("click", function () {
    const numbers = [1, 2, 3, 4, 5];
    let sum = 0;

    for (let i = 1; i < numbers.length; i++) {
        sum += numbers[i];
    }

    document.getElementById("result").textContent = `Sum: ${sum}`;
});