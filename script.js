// const apiKey = "7823afaff95539e4d9af1dbcc696293e";
// const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=banglore";

const apiUrl = "https://api.openweathermap.org/data/2.5/weather?appid=7823afaff95539e4d9af1dbcc696293e&units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");


async function checkWeather(city){
    const response = await fetch(apiUrl + city);

    //if invalid input is entered....
    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }else{
        var data = await response.json();
        // console.log(data);
    
        //change values as per the city from API...
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
    
        //changing of icons with respect to city's weather 

        if(data.weather[0].main == "Clouds"){
            weatherIcon.src = "/images/clouds.png";
        }else if(data.weather[0].main == "Clear") {
            weatherIcon.src = "/images/clear.png";
        }else if(data.weather[0].main == "Rain") {
            weatherIcon.src = "/images/rain.png";
        }else if(data.weather[0].main == "Drizzle") {
            weatherIcon.src = "/images/drizzle.png";
        }else if(data.weather[0].main == "Mist") {
            weatherIcon.src = "/images/mist.png";
        }else if(data.weather[0].main == "Snow") {
            weatherIcon.src = "/images/snow.png";
        }
    
        //if valid input is entered...
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";

    }
} 

searchBtn.addEventListener("click", () =>{
    checkWeather(searchBox.value);
})
