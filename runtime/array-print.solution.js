document.getElementById("printArray").addEventListener("click", function () {
    const fruits = ["Apple", "Banana", "Cherry"];
    let output = "";

    // Correct loop logic
    for (let i = 0; i < fruits.length; i++) { // Use `<` instead of `<=`
        output += `Fruit ${i + 1}: ${fruits[i]}\n`;
    }

    document.getElementById("output").textContent = output;
});