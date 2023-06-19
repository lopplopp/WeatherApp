import updateDisplay from './updateDisplay.js'

let input = document.getElementById("search")

function addListener(){
    input.addEventListener("keypress", function(event){
        if(event.key === 'Enter'){
            event.preventDefault();
            updateDisplay(input.value);
            input.value = "";
        }
    })
}

export default addListener;