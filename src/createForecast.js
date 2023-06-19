import getForecastData from "./getForecastData";

const checkbox = document.getElementById('checkbox');

async function createForecast(location){
    const forecastData = await getForecastData();
    const forecastDiv = document.querySelector(".forecast");

    while (forecastDiv.firstChild) {
        forecastDiv.removeChild(forecastDiv.lastChild);
      }

    for(const day of forecastData){
        forecastDiv.appendChild(createForecastCard(day));
    }
}


function createForecastCard(array){

    const card = document.createElement('div');
    card.classList.add("forecastcard");

    const date = document.createElement("div");
    date.innerHTML = array[0];
    card.appendChild(date);

    const iconDiv = document.createElement("div");
    const icon = document.createElement("img");
    icon.src = array[6];
    iconDiv.appendChild(icon);
    card.appendChild(iconDiv);

    const maxDiv = document.createElement("div");
    if(checkbox.checked){
        maxDiv.innerHTML = `Max: ${array[2]}°F`;
    }else{
        maxDiv.innerHTML = `Max: ${array[1]}°C`;
    }
    card.appendChild(maxDiv);

    const minDiv = document.createElement("div");
    if(checkbox.checked){
        minDiv.innerHTML = `Min: ${array[4]}°F`;
    }else{
        minDiv.innerHTML = `Min: ${array[3]}°C`;
    }
    card.appendChild(minDiv);

    const precip = document.createElement("div");
    precip.innerHTML = `Preciption: ${array[5]}`;
    card.appendChild(precip);

    return card;
}

export default createForecast;