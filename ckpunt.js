"use strict";

document.addEventListener("DOMContentLoaded", () => {

    const eurInput = document.getElementById("eurInput"),
        usdInput = document.getElementById("usdInput"),
        eurOutput = document.getElementById("eurResult"),
        usdOutput = document.getElementById("usdResult"),
        eurBtn = document.getElementById("eurButton"),
        usdBtn = document.getElementById("usdButton");

    const course = {
        "eur": 0.0096,
        "usd": 0.001,
        "rub": 1,
    }

    function calcTotal(input, output, currency) {
        const inputValue = parseFloat(input.value);
        let rubles = inputValue / course[currency];

        if (!isNaN(inputValue) && currency === "eur") {
            output.textContent = `Это ${rubles.toFixed(2)} рублей`;
        } else if (!isNaN(inputValue) && currency === "usd") {
            output.textContent = `Это ${rubles.toFixed(2)} рублей`;
        } else {
            output.textContent = `Введите число`;
        }
    };

    eurBtn.addEventListener("click", () => {
        eurInput.value = "";
        eurOutput.textContent = "Давай по новой Миша, все х**ня"
        eurOutput.classList.add("remove-message");
    });

    usdBtn.addEventListener("click", () => {
        usdInput.value = "";
        usdOutput.textContent = "Давай по новой Миша, все х**ня"
        usdOutput.classList.add("remove-message");
    });

    eurInput.addEventListener("input", () => {
        calcTotal(eurInput, eurOutput, "eur");
        eurOutput.classList.remove("remove-message");
    });

    usdInput.addEventListener("input", () => {
        calcTotal(usdInput, usdOutput, "usd");
        usdOutput.classList.remove("remove-message");
    });
});