const input = document.getElementById("input");
const result = document.getElementById("result");
const inputType = document.getElementById("inputType");
const resultType = document.getElementById("resultType");

// Event Listener
input.addEventListener("keyup", tempCalc);
inputType.addEventListener("change", tempCalc);
resultType.addEventListener("change", tempCalc);

function tempCalc() {
    let inputFrom = inputType.value;
    let resultTo = resultType.value;

    if (inputFrom === "celsius" && resultTo === "celsius") {
        result.value = Number(input.value);
    } else if (inputFrom === "celsius" && resultTo === "kelvin") {
        result.value = Number(input.value) + 273.15;
    } else if (inputFrom === "celsius" && resultTo === "fahrenheit") {
        result.value = (Number(input.value) * 9 / 5) + 32;
    } else if (inputFrom === "kelvin" && resultTo === "celsius") {
        result.value = Number(input.value) - 273.15;
    } else if (inputFrom === "kelvin" && resultTo === "kelvin") {
        result.value = Number(input.value);
    } else if (inputFrom === "kelvin" && resultTo === "fahrenheit") {
        result.value = (Number(input.value) - 273.15) * 9 / 5 + 32;
    } else if (inputFrom === "fahrenheit" && resultTo === "celsius") {
        result.value = (Number(input.value) - 32) * 5 / 9;
    } else if (inputFrom === "fahrenheit" && resultTo === "kelvin") {
        result.value = (Number(input.value) - 32) * 5 / 9 + 273.15;
    } else if (inputFrom === "fahrenheit" && resultTo === "fahrenheit") {
        result.value = Number(input.value);
    }
}