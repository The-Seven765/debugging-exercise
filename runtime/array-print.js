document.getElementById("printArray").addEventListener("click", function () {
    const fruits = ["Apple", "Banana", "Cherry"];
    let output = "";


    for (let i = 0; i <= fruits.length; i++) { 
        output += `Fruit ${i + 1}: ${fruits[i]}\n`; 
    }

    document.getElementById("output").textContent = output;
});
