const input = document.getElementById("input");
const result = document.getElementById("result");
const inputType = document.getElementById("inputType");
const resultType = document.getElementById("resultType");

// Event Listener
input.addEventListener("keyup", timeCalc);
inputType.addEventListener("change", timeCalc);
resultType.addEventListener("change", timeCalc);

function timeCalc() {

    //This function compares the user input and calculates 

    let inputFrom = inputType.value;
    let resultTo = resultType.value;

    if (inputFrom === "seconds" && resultTo === "seconds") {
        result.value = Number(input.value);
    } else if (inputFrom === "seconds" && resultTo === "minutes") {
        result.value = Number(input.value) / 60;

    } else if (inputFrom === "seconds" && resultTo === "hours") {
        result.value = Number(input.value) / 3600;
    }

    if (inputFrom === "minutes" && resultTo === "seconds") {
        result.value = Number(input.value) * 60;
    } else if (inputFrom === "minutes" && resultTo === "minutes") {
        result.value = Number(input.value);

    } else if (inputFrom === "minutes" && resultTo === "hours") {
        result.value = Number(input.value) / 60;

    }


    if (inputFrom === "hours" && resultTo === "seconds") {
        result.value = Number(input.value) * 3600;

    } else if (inputFrom === "hours" && resultTo === "minutes") {
        result.value = Number(input.value) * 60;

    } else if (inputFrom === "hours" && resultTo === "hours") {
        result.value = Number(input.value);

    }

}