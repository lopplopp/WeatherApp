async function getWeatherData(location="hongkong"){
    try{
        const data = await fetch(`https://api.weatherapi.com/v1/current.json?key=8ba64ad4c78d44d7bf475636230806&q=${location}&aqi=no`);
        const dataJson = await data.json();
        const weatherData = dataJson.current;
        const locationData = dataJson.location;

        localStorage.setItem("current", locationData.name);
        localStorage.setItem("isDay", weatherData.is_day);


        let infoHash = {
            isDay: weatherData.is_day,
            condition: weatherData.condition.text,
            icon: weatherData.condition.icon,
            degreeC: weatherData.temp_c,
            degreeF: weatherData.temp_f,
            feelC: weatherData.feelslike_c,
            feelF: weatherData.feelslike_f,
            wind: weatherData.wind_kph,
            humidity: weatherData.humidity,
            precip: weatherData.precip_mm,
            date: locationData.localtime.slice(0,10),
            time: locationData.localtime.slice(-5),
            place: locationData.name
        }        


        return infoHash;

    }catch(error){
        console.log(error);
    }
    

    
}

export default getWeatherData;