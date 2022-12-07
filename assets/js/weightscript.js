const input = document.getElementById("input");
const result = document.getElementById("result");
const inputType = document.getElementById("inputType");
const resultType = document.getElementById("resultType");

// Event Listener
input.addEventListener("keyup", weightCalc);
inputType.addEventListener("change", weightCalc);
resultType.addEventListener("change", weightCalc);

function weightCalc() {

    //This function compares the user input and calculates 

    let inputFrom = inputType.value;
    let resultTo = resultType.value;

    if (inputFrom === "celcius" && resultTo === "celcius") {
        result.value = Number(input.value);
    } else if (inputFrom === "celcius" && resultTo === "kelvin") {
        result.value = Number(input.value) + 273.15;

    } else if (inputFrom === "celcius" && resultTo === "fahrenheit") {
        result.value = (Number(input.value) * 9 / 5) + 32;
    }

    if (inputFrom === "kelvin" && resultTo === "celcius") {
        result.value = Number(input.value) - 273.15;
    } else if (inputFrom === "kelvin" && resultTo === "kelvin") {
        result.value = Number(input.value);
    } else if (inputFrom === "kelvin" && resultTo === "fahrenheit") {
        result.value = (Number(input.value) - 273.15) * 9 / 5 + 32;
    }


    if (inputFrom === "fahrenheit" && resultTo === "celcius") {
        result.value = (Number(input.value) - 32) * 5 / 9;

    } else if (inputFrom === "fahrenheit" && resultTo === "kelvin") {
        result.value = (Number(input.value) - 32) * 5 / 9 + 273.15;
        tempCalc
    } else if (inputFrom === "fahrenheit" && resultTo === "fahrenheit") {
        result.value = Number(input.value);
    }

}
weight