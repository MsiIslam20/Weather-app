// window.addEventListener("load", () => {
//     let long;
//     let lat;
//     let temperatureDescription = document.querySelector(".temperature-des");
//     let temperatureDegree = document.querySelector(".temperature-degree");
//     let locationTimezone = document.querySelector(".location-timezone");

//     if(navigator.geolocation){
//         navigator.geolocation.getCurrentPosition(position => {
//             long = position.coords.longitude;
//             lat = position.coords.latitude;
//             console.log(position);
            

//             console.log(lat , long);
            
        
//             // const proxy = 'https://cors-anywhere.herokuapp.com/';
//             // fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
//             const api = `https://openweathermap.org/data/2.5/weather?q=dhaka&units=metric&APPID=ff36491d9523761cec4d0bc539fd302a`;
            
//             fetch(api)
//                 .then(response => {
//                     return response.json();
//                 })
//                 .then(data => {
//                     console.log(data);
//                     const {temp_c , summary} = data.current;
//                     temperatureDegree.textContent = temp_c;
//                 })
//         })
        
//     };
// });
window.addEventListener("load", () => {
let temperatureDegree = document.querySelector(".temperature-degree");
const api = {
    key: "6f0afe92ff5231fed4df9aeac089587d",
    base: "https://api.openweathermap.org/data/2.5/"
}

// function getResults() {
    fetch(`${api.base}weather?q=sylhet&units=metric&APPID=${api.key}`)
        .then(weather => {
            return weather.json();
        })
        .then(data => {
            console.log(data);
            const {temp , summary} = data.main;
            temperatureDegree.textContent = Math.round(temp);
        });
// }
});
// getResults()