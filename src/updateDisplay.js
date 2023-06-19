import data from './getWeatherData';
import setBackground from './setbackground';

async function updateDisplay(location){
    const info = await data(location);
    const checkbox = document.getElementById('checkbox');

    const locationDiv = document.querySelector('.location');
    locationDiv.innerHTML = `Location: ${info["place"]}`;

    const conditionDiv = document.querySelector('.condition');
    conditionDiv.innerHTML = `Condition: ${info["condition"]}`;

    const icon = document.querySelector("#iconImg");
    icon.src = info["icon"];

    if(checkbox.checked){
        const degreeDiv = document.querySelector('.degree');
        degreeDiv.innerHTML = `Current: ${info["degreeF"]}°F`;

        const feelDiv = document.querySelector('.feels')
        feelDiv.innerHTML = `Feels like: ${info["feelF"]}°F`;
    }else{
        const degreeDiv = document.querySelector('.degree');
        degreeDiv.innerHTML = `Current: ${info["degreeC"]}°C`;

        const feelDiv = document.querySelector('.feels')
        feelDiv.innerHTML = `Feels like: ${info["feelC"]}°C`;
    }

    

    const dateDiv = document.querySelector('.date');
    dateDiv.innerHTML = info["date"];

    const timeDiv = document.querySelector('.time');
    timeDiv.innerHTML = `Time: ${info["time"]}`;

    const windDiv = document.querySelector('.wind');
    windDiv.innerHTML = `Wind: ${info["wind"]}`;

    const humidityDiv = document.querySelector('.humidity');
    humidityDiv.innerHTML = `Humidity: ${info["humidity"]}`;
    const precipDiv = document.querySelector('.precip');
    precipDiv.innerHTML = `precipitation: ${info["precip"]}`;

    setBackground(info["isDay"]);
}

export default updateDisplay;