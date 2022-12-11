const input = document.getElementById("input");
const result = document.getElementById("result");
const inputType = document.getElementById("inputType");
const resultType = document.getElementById("resultType");

// Event Listener
input.addEventListener("keyup", weightCalc);
inputType.addEventListener("change", weightCalc);
resultType.addEventListener("change", weightCalc);

function weightCalc() {
    // Define conversion factors
    const factors = {
        gram: {
            gram: 1,
            kg: 0.001,
            pounds: 0.00220462
        },
        kg: {
            gram: 1000,
            kg: 1,
            pounds: 2.20462
        },
        pounds: {
            gram: 453.592,
            kg: 0.453592,
            pounds: 1
        }
    }

    // Get input and result units
    let inputFrom = inputType.value;
    let resultTo = resultType.value;

    // Convert the input value using the conversion factor
    result.value = Number(input.value) * factors[inputFrom][resultTo];
}