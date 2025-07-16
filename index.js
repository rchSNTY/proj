const input = document.getElementById("box");
const fahrenheit = document.getElementById("fahrenheit");
const celsius = document.getElementById("celsius");

// button functionality
const result = document.getElementById("submit");

// Displays output
let output = document.getElementById('result');

function convert() {

    if (fahrenheit.checked) {

        output.innerHTML = "Converting...";
        output.style.color = "blue";

        setTimeout(() => {
            output.style.color = "black";
            output.textContent = ((input.value * 9 / 5) + 32) + " F";
        }, 1500);

    }

    else if (celsius.checked) {

        output.innerHTML = "Converting...";
        output.style.color = "blue";

        setTimeout(() => {
            output.style.color = "black";
            output.textContent = ((input.value - 32) * 5 / 9) + " C";
        }, 1500);

    }

   else if(input.value === "") {
    output.textContent = "Please type a value.";
}

    else{
        output.textContent = "Please select a conversion type.";
    }
}










