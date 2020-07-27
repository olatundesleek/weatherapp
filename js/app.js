// export let myIcon;

// window.addEventListener("load", () => {
//   let long;
//   let lat;
//   let temp = document.querySelector("#temp");
//   let sum = document.querySelector("#description");
//   let myCity = document.querySelector(".ccity");
//   let loader = document.querySelector(".lds-ripple");
//   let cityText = document.querySelector(".location");
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(location => {
//       long = location.coords.longitude;
//       lat = location.coords.latitude;

//       console.log(long);
//       console.log(lat);

//       const proxy = "https://cors-anywhere.herokuapp.com/";
//       const key = "2b0f1e93168e7f090b4956334fcedbdd";

//       const api = `${proxy}https://api.darksky.net/forecast/${key}/${lat},${long}`;
//       let verify = response => {
//         if (!response.ok) {
//           console.log(response.statusText);
//         } else {
//           return response;
//         }
//       };
//       let readJson = response => response.json();
//       let getResponse = response => {
//         loader.classList.add("load");
//         cityText.classList.remove("load");
//         temp.classList.remove("load");
//         return response;
//       };
//       fetch(api)
//         .then(verify)
//         .then(getResponse)
//         .then(readJson)
//         .then(data => {
//           console.log(data);

//           let { summary, temperature, icon } = data.currently;
//           let city = data.timezone;

//           temperature = (temperature - 32) / 1.8;
//           temperature = Math.round(temperature);
//           temp.textContent = temperature;
//           sum.textContent = summary;
//           myCity.textContent = city;
//           myIcon = icon;
//           console.log(myIcon);

//           // new code
//           var skycons = new Skycons({ color: "white" });
//           // on Android, a nasty hack is needed: {"resizeClear": true}

//           // you can add a canvas by it's ID...
//           // skycons.add("icon2", Skycons.${icon});
//           let iconDetail = document.querySelector(".icon-detail");
//           let x = myIcon;
//           // // ...or by the canvas DOM element itself.
//           skycons.add(document.getElementById("icon2"), x);

//           // // if you're using the Forecast API, you can also supply
//           // // strings: "partly-cloudy-day" or "rain".

//           // start animation!
//           skycons.play();

//           // // you can also halt animation with skycons.pause()

//           // // want to change the icon? no problem:
//           // skycons.set("icon1", Skycons.PARTLY_CLOUDY_NIGHT);

//           // // want to remove one altogether? no problem:
//           // skycons.remove("icon2");
//           console.log(myIcon);
//         });
//     });
//   }
// });
function returnJson(data) {
  return data.json();
}
function output(weather) {
  loader.style.display = "none";
  let name = weather.name;
  let temp = weather.main.temp;
  let ctemp = temp - 273.15;
  let cdesc = weather.weather[0].description;
  cityDetail.textContent = `${name} weather is ${ctemp} `;
  desc.textContent = cdesc;
  cityDetail.style.display = "inline";
  deg.style.display = "inline";
  console.log(weather);
}
let loader = document.querySelector(".lds-ripple");
let city = document.querySelector(".cityname");
let deg = document.querySelector(".deg");
let btn = document.querySelector(".getbtn");
let icon = document.querySelector(".icons");
let cityDetail = document.querySelector(".citydetail");
let desc = document.querySelector(".desc");
let temp = document.querySelector(".temp");
let api = `api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=f44d5d384516bd4f3c0e9d6d8639d9a1`;
btn.addEventListener("click", function () {
  loader.style.display = "inline-block";
  fetch(api).then(returnJson).then(output);
});
