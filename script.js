let btn = document.getElementById("btn");
let input = document.getElementById("input");
let div = document.getElementById("division");
let section = document.createElement("section");
let tempSec = document.createElement("div");
let humidSec = document.createElement("div");
let feelsLikeSec = document.createElement("div");
let temp = document.createElement("p");
let weatherType = document.createElement("p");
let place = document.createElement("p");
let humidity = document.createElement("p");
let humidityText = document.createElement("p");
let feels_like = document.createElement("p");
let feels_likeText = document.createElement("p");
let otherDesc = document.createElement("div");

let apikey = "7011fc130cfa11c2a154982db812bace"; // API KEY

btn.addEventListener("click", () => {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${apikey}&units=metric`
  )
    .then((res) => res.json())
    .then((res) => {
      section.innerHTML = "";
      input.value = "";

      section.classList.add(
        "p-2",
        "py-6",
        "rounded-md",
        "flex",
        "flex-col",
        "justify-center",
        "items-center"
      );

      temp.classList.add("text-5xl", "font-normal");

      weatherType.classList.add(
        "text-center",
        "text-xl",
        "font-medium",
        "mt-4"
      );

      place.classList.add("mt-4", "text-center", "text-xl", "font-medium");

      otherDesc.classList.add(
        "flex",
        "justify-between",
        "items-center",
        "w-full",
        "px-2",
        "mt-6"
      );

      humidSec.classList.add("flex");
      feelsLikeSec.classList.add("flex");

      place.innerText = `${res.name}`;
      humidity.innerText = ` ${res.main.humidity} %`;
      feels_like.innerHTML = ` ${Math.round(res.main.feels_like)}&#176; C`;
      humidityText.innerHTML = "Humidity: &nbsp;";
      feels_likeText.innerHTML = "Feels Like: &nbsp;";
      temp.innerHTML = `${Math.round(res.main.temp)}&#176; C`;
      weatherType.innerText = `${res.weather[0].main}`;
      tempSec.appendChild(temp);
      tempSec.appendChild(weatherType);

      // Humidity Section

      humidSec.appendChild(humidityText);
      humidSec.appendChild(humidity);

      // Feels Like Seciton

      feelsLikeSec.appendChild(feels_likeText);
      feelsLikeSec.appendChild(feels_like);

      otherDesc.appendChild(humidSec);
      otherDesc.appendChild(feelsLikeSec);

      // Appending Inside Section
      section.appendChild(tempSec);
      section.appendChild(place);
      section.appendChild(otherDesc);

      // Appending Inside Main Division
      div.insertBefore(section, input);
      console.log(res);
    });
});
