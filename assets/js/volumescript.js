const result = document.getElementById("result");
const inputType = document.getElementById("inputType");
const resultType = document.getElementById("resultType");

// Event Listener
input.addEventListener("keyup", timeCalc);
inputType.addEventListener("change", timeCalc);
resultType.addEventListener("change", timeCalc);

// Conversion factors
const conversionFactors = {
    milliliters: {
        milliliters: 1,
        liters: 1 / 1000,
        cups: 1 / 240,
        pints: 1 / 473.176,
    },
    liters: {
        milliliters: 1000,
        liters: 1,
        cups: 1 / 4,
        pints: 1 / 2.11338,
    },
    cups: {
        milliliters: 240,
        liters: 4,
        cups: 1,
        pints: 1 / 2.37,
    },
    pints: {
        milliliters: 473.176,
        liters: 2.11338,
        cups: 2.37,
        pints: 1,
    },

};

function timeCalc() {
    // This function compares the user input and calculates

    let inputFrom = inputType.value;
    let resultTo = resultType.value;

    result.value = conversionFactors[inputFrom][resultTo] * Number(input.value);
}