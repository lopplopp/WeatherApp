import updateDisplay from './updateDisplay';
import createForecast from './createForecast';

const checkbox = document.getElementById('checkbox');

function changeDegree(){
    checkbox.addEventListener("change", function(){
        updateDisplay(localStorage.getItem("current"));
        createForecast(localStorage.getItem("current"))
    })
}



export default changeDegree;