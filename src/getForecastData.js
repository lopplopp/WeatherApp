async function getForecastData(location="hongkong"){
    try{
        const data = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=8ba64ad4c78d44d7bf475636230806&q=${location}&days=7&aqi=no&alerts=no`);
        const dataJson = await data.json();
        const forecastData = dataJson.forecast.forecastday;

        let forecastDays = [];
        for(const data of forecastData){
            forecastDays.push(
                [data.date, 
                data.day["maxtemp_c"],
                data.day["maxtemp_f"],
                data.day["mintemp_c"],
                data.day["mintemp_f"],
                data.day["daily_chance_of_rain"],
                data.day["condition"]["icon"]]
                );
        };
        
        return forecastDays;

    }catch(error){
        console.log(error);
    }
    

    
}

export default getForecastData;