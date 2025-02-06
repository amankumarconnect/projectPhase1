async function getWeather() {
    try {
        let res = await fetch("https://api.open-meteo.com/v1/forecast?latitude=28.7041&longitude=77.1025&current_weather=true");
        let data = await res.json();
        document.querySelector(".swagat").textContent = `${data.current_weather.temperature}°C`; 
    } catch (error) {
        console.error("Error fetching weather data:", error);
        document.querySelector(".swagat").textContent = "Weather Unavailable";
    }
}
getWeather();
