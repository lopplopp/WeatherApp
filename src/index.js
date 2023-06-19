import updateDisplay from "./updateDisplay";
import input from "./input.js";
import checkbox from "./checkbox.js";

import createForecase from "./createForecast";

import getForecastData from "./getForecastData.js";

import "../style/style.css"

localStorage.setItem("current", "hongkong")


async function start(){
    input();
    checkbox();
    updateDisplay()
    createForecase()
}

start();

