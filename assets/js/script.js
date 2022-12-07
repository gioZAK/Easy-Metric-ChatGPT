let input = document.getElementById("input");
let result = document.getElementById("result");
let inputType = document.getElementById("inputType");
let resultType = document.getElementById("resultType");

let inputTypeValeu, resultTypeValue;

input.addEventListener("keyup", myResult);
inputType.addEventListener("change", myResult);
resultType.addEventListener("change", myResult);

// taking initial value
option_from = inputType.value;
option_to = resultType.value;


function myResult() {


    // when we change the input and output type value we need to update the 
    // inputFrom and resultTo

    inputFrom = inputType.value;
    resultTo = resultType.value;


    // now compare the input and resultType value and add formula

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