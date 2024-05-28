const ApiKey = "514a823c3d5bfdf3d3a881f715617550";
const ApiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const inputValue = document.querySelector(".input");
const btn = document.querySelector(".button");
const weatherImg = document.querySelector(".weather-icon");


async function checkWeather(city) {
    const response = await fetch(ApiUrl +city + `&appid=${ApiKey}`).then((result)=> result);
    var data = await response.json();

        document.querySelector(".temp").innerHTML = data.main.temp.toFixed() + "°C";
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";


    if(data.weather[0].main === "Clear") {
        weatherImg.src="weather-app-img/images/clear.png";
    } else if (data.weather[0].main === "Clouds") {
        weatherImg.src="weather-app-img/images/clouds.png";
    } else if (data.weather[0].main === "Rain") {
        weatherImg.src="weather-app-img/images/rain.png";
    } else if (data.weather[0].main === "Drizzle") {
        weatherImg.src="weather-app-img/images/drizzle.png";
    } else if (data.weather[0].main === "Mist") {
        weatherImg.src="weather-app-img/images/mist.png";
    }

    document.querySelector(".weather").style.display = "flex"; 
    document.querySelector(".card").style.height = "580px"; 
}

inputValue.addEventListener("keypress", (e)=> {
    if(e.key === "Enter") {
        checkWeather(inputValue.value);
        inputValue.value= "";
    }
})

btn.onclick = () => {
        checkWeather(inputValue.value);
        inputValue.value= "";
    }
