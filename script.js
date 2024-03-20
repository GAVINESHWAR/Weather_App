const apikey = "da98fb0490a97bf9117726694d9d82cb";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

// search box
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apikey}`);
  // fetching the api
  if (response.status==404){
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
    alert("Invalid City Name");
  }else{
  var data = await response.json();
  // /using the data in it

  console.log(data);

  document.querySelector(".city").innerText =
    data.name + "    " + data.sys.country;
  document.querySelector(".temp").innerText = Math.round(data.main.temp) + "°c";
  document.querySelector(".humidity").innerText = data.main.humidity + "%";
  document.querySelector(".wind").innerText = data.wind.speed + " km/h";
  if (data.weather[0].main == "Clouds") {
    weatherIcon.src = "images/clouds.png";
  } else if (data.weather[0].main == "Clear") {
    weatherIcon.src = "images/clear.png";
  } else if (data.weather[0].main == "Rain") {
    weatherIcon.src = "images/rain.png";
  } else if (data.weather[0].main == "Drizzle") {
    weatherIcon.src = "images/drizzle.png";
  } else if (data.weather[0].main == "Mist") {
    weatherIcon.src = "images/mist.png";
    }
    document.querySelector(".error").style.display = "none";
    document.querySelector(".weather").style.display = "block";
  }
}
searchBtn.addEventListener("click", () => {
    if (searchBox.value==""){
      alert("enter city name")
    }else{
      checkWeather(searchBox.value);
      alert("Clicked");
    }
});
