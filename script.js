let input = document.getElementById("cityName");
let apikey = "7011fc130cfa11c2a154982db812bace";
let btn = document.getElementById("btn");
let temp = document.getElementById("temp");
let currLocation = document.getElementById("location");
let humidity = document.getElementById("humidity");
let feels = document.getElementById("feels_like");
let weatherImg = document.getElementById("weather-img");
let weatherStatus = document.getElementById("weather-status");

btn.addEventListener("click", () => {
  console.log(input.value);
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${apikey}&units=metric`
  )
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      temp.innerText = Math.round(res.main.temp);
      currLocation.innerText = res.name;
      humidity.innerText = res.main.humidity;
      feels.innerText = Math.round(res.main.feels_like);
      weatherStatus.innerText = res.weather[0].main;

      console.log(res.weather[0].main);
      console.log(typeof res.weather[0].main);

      if (res.weather[0].main == "Clouds") {
        weatherImg.src = "./assets/New Icons/cloud.png";
      }
      else if (res.weather[0].main == "Clear" || "Sunny") {
        weatherImg.src = "./assets/New Icons/sunny.png";
      }
      else if (res.weather[0].main == "Rainy") {
        weatherImg.src = "./assets/New Icons/rainy.png";
      }
      else if (res.weather[0].main == "Haze" || "Smoke") {
        weatherImg.src = "./assets/New Icons/haze.png";
      }
      else if (res.weather[0].main == "Snow") {
        weatherImg.src = "./assets/New Icons/snowy.png";
      }
      else if (res.weather[0].main == "storm") {
        weatherImg.src = "./assets/New Icons/storm.png";
      }
    });
});
