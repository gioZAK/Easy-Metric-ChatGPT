const result = document.getElementById("result");
const inputType = document.getElementById("inputType");
const resultType = document.getElementById("resultType");
const input = document.getElementById("input");

// Event Listener
input.addEventListener("keyup", lengthCalc);
inputType.addEventListener("change", lengthCalc);
resultType.addEventListener("change", lengthCalc);

// Conversion factors
const conversionFactors = {
    centimeters: {
        centimeters: 1,
        meters: 1 / 100,
        kilometers: 1 / 100000,
        inches: 0.393701,
        miles: 1 / 160934.4,
        feet: 1 / 30.48,
    },
    meters: {
        centimeters: 100,
        meters: 1,
        kilometers: 1 / 1000,
        inches: 39.3701,
        miles: 1 / 1609.344,
        feet: 1 / 0.3048,
    },
    kilometers: {
        centimeters: 100000,
        meters: 1000,
        kilometers: 1,
        inches: 39370.1,
        miles: 0.621371,
        feet: 1 / 0.0003048,
    },
    inches: {
        centimeters: 2.54,
        meters: 1 / 39.3701,
        kilometers: 1 / 39370.1,
        inches: 1,
        miles: 1 / 63360,
        feet: 1 / 12,
    },
    miles: {
        centimeters: 160934.4,
        meters: 1609.344,
        kilometers: 1.60934,
        inches: 63360,
        miles: 1,
        feet: 1 / 0.000189394,
    },
    feet: {
        centimeters: 30.48,
        meters: 0.3048,
        kilometers: 0.0003048,
        inches: 12,
        miles: 0.000189394,
        feet: 1,
    },
};

function lengthCalc() {
    // This function compares the user input and calculates

    let inputFrom = inputType.value;
    let resultTo = resultType.value;

    result.value = conversionFactors[inputFrom][resultTo] * Number(input.value);
}