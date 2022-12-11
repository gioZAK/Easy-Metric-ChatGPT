// DOM
const input = document.getElementById("input");
const result = document.getElementById("result");
const inputType = document.getElementById("inputType");
const resultType = document.getElementById("resultType");

// Object with conversion factors
const conversions = {
    centimeter: {
        inches: 0.3937,
        foot: 0.0328084,
        miles: 0.00000621371,
        centimeter: 1,
        meter: 0.01,
        kilometer: 0.00001
    },
    meter: {
        inches: 39.37,
        foot: 3.281,
        miles: 0.000621371,
        centimeter: 100,
        meter: 1,
        kilometer: 0.001
    },
    kilometer: {
        inches: 39370,
        foot: 3280.84,
        miles: 0.621371,
        centimeter: 100000,
        meter: 1000,
        kilometer: 1
    },
    inches: {
        inches: 1,
        foot: 0.0833333,
        miles: 0.0000157828,
        centimeter: 2.54,
        meter: 0.0254,
        kilometer: 0.0000254
    },
    foot: {
        inches: 12,
        foot: 1,
        miles: 0.000189394,
        centimeter: 30.48,
        meter: 0.3048,
        kilometer: 0.0003048
    },
    miles: {
        inches: 63360,
        foot: 5280,
        miles: 1,
        centimeter: 160934,
        meter: 1609.34,
        kilometer: 1.60934
    }
};

// Event Listener
input.addEventListener("keyup", lengthCalc);
inputType.addEventListener("change", lengthCalc);
resultType.addEventListener("change", lengthCalc);

function lengthCalc() {
    // This function receives the user input and calculates the conversion

    let inputFrom = inputType.value;
    let resultTo = resultType.value;

    // Calculate the result using the conversion factors
    result.value = Number(input.value) * conversions[inputFrom][resultTo];
}