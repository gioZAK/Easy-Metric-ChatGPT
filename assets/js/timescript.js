const input = document.getElementById("input");
const result = document.getElementById("result");
const inputType = document.getElementById("inputType");
const resultType = document.getElementById("resultType");

// Event Listener
input.addEventListener("keyup", timeCalc);
inputType.addEventListener("change", timeCalc);
resultType.addEventListener("change", timeCalc);

// Conversion factors
const conversionFactors = {
    seconds: {
        seconds: 1,
        minutes: 1 / 60,
        hours: 1 / 3600,
        days: 1 / 86400,
        weeks: 1 / 604800,
        months: 1 / 2628000,
        years: 1 / 31536000,
    },
    minutes: {
        seconds: 60,
        minutes: 1,
        hours: 1 / 60,
        days: 1 / 1440,
        weeks: 1 / 10080,
        months: 1 / 44640,
        years: 1 / 525600,
    },
    hours: {
        seconds: 3600,
        minutes: 60,
        hours: 1,
        days: 1 / 24,
        weeks: 1 / 168,
        months: 1 / 730.001,
        years: 1 / 8760,
    },
    days: {
        seconds: 86400,
        minutes: 1440,
        hours: 24,
        days: 1,
        weeks: 1 / 7,
        months: 1 / 30.4167,
        years: 1 / 365,
    },
    weeks: {
        seconds: 604800,
        minutes: 10080,
        hours: 168,
        days: 7,
        weeks: 1,
        months: 1 / 4.34524,
        years: 1 / 52.1775,
    },
    months: {
        seconds: 2628000,
        minutes: 44640,
        hours: 730.001,
        days: 30.4167,
        weeks: 4.34524,
        months: 1,
        years: 1 / 12,
    },
    years: {
        seconds: 31536000,
        minutes: 525600,
        hours: 8760,
        days: 365,
        weeks: 52.1775,
        months: 12,
        years: 1,
    },
};

function timeCalc() {
    // This function compares the user input and calculates

    let inputFrom = inputType.value;
    let resultTo = resultType.value;

    result.value = conversionFactors[inputFrom][resultTo] * Number(input.value);
}