const input = document.getElementById("input");
const result = document.getElementById("result");
const inputType = document.getElementById("inputType");
const resultType = document.getElementById("resultType");

// Event Listener
input.addEventListener("keyup", weightCalc);
inputType.addEventListener("change", weightCalc);
resultType.addEventListener("change", weightCalc);


// Define conversion factors
const conversionFactors = {
    gram: {
        gram: 1,
        kg: 0.001,
        pounds: 0.00220462,
        ounces: 0.035274,
        stones: 0.000157473
    },
    kg: {
        gram: 1000,
        kg: 1,
        pounds: 2.20462,
        ounces: 35.274,
        stones: 0.157473
    },
    pounds: {
        gram: 453.592,
        kg: 0.453592,
        pounds: 1,
        ounces: 16,
        stones: 0.0714286
    },
    ounces: {
        gram: 28.3495,
        kg: 0.0283495,
        pounds: 0.0625,
        ounces: 1,
        stones: 0.00446429
    },
    stones: {
        gram: 6350.29,
        kg: 6.35029,
        pounds: 14,
        ounces: 224,
        stones: 1
    }
}

function weightCalc() {
    // This function compares the user input and calculates

    let inputFrom = inputType.value;
    let resultTo = resultType.value;

    result.value = conversionFactors[inputFrom][resultTo] * Number(input.value);
}