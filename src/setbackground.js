import day from '../img/background-day.jpg';
import night from '../img/background-night.jpg';

function setBackground(isDay){
    const background = document.body;
    const mainDiv = document.querySelector(".main");
    const forecaseDiv = document.querySelector(".forecast");

    if(Number(isDay) === 1){
        background.setAttribute("background", day)
        if(mainDiv.classList.contains("night")){
            mainDiv.classList.toggle("night");
        }
        if(forecaseDiv.classList.contains("night")){
            forecaseDiv.classList.toggle("night");
        }
    }else{
        background.setAttribute("background", night)
        if(!(mainDiv.classList.contains("night"))){
            mainDiv.classList.toggle("night");
        }
        if(!(forecaseDiv.classList.contains("night"))){
            forecaseDiv.classList.toggle("night");
        }
    }

    
}

export default setBackground;
