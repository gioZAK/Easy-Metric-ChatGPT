const input = document.getElementById("input");
const result = document.getElementById("result");
const inputType = document.getElementById("inputType");
const resultType = document.getElementById("resultType");

// Event Listener
input.addEventListener("keyup", lengthCalc);
inputType.addEventListener("change", lengthCalc);
resultType.addEventListener("change", lengthCalc);

function lengthCalc() {

    //This function compares the user input and calculates 

    let inputFrom = inputType.value;
    let resultTo = resultType.value;

    if (inputFrom === "centimeter" && resultTo === "inches") {
        result.value = Number(input.value) * 0.3937;

    } else if (inputFrom === "centimeter" && resultTo === "foot") {
        result.value = Number(input.value) / 30.48;

    } else if (inputFrom === "centimeter" && resultTo === "miles") {
        result.value = Number(input.value) / 160900;

    }

    if (inputFrom === "meter" && resultTo === "inches") {
        result.value = Number(input.value) * 39.37;

    } else if (inputFrom === "meter" && resultTo === "foot") {
        result.value = Number(input.value) * 3.281;

    } else if (inputFrom === "meter" && resultTo === "miles") {
        result.value = Number(input.value) / 1609;

    }


    if (inputFrom === "kilometer" && resultTo === "inches") {
        result.value = Number(input.value) * 39370;

    } else if (inputFrom === "kilometer" && resultTo === "foot") {
        result.value = Number(input.value) * 3281;

    } else if (inputFrom === "kilometer" && resultTo === "miles") {
        result.value = Number(input.value) / 1.609;

    }

}