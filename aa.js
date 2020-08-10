const proxy = 'http://cors-anywhere.herokuapp.com/';
const api = `${proxy}
https://api.darksky.net/forecast/fd9d9c6418c23d94745b836767721ad1/${lat},${long}`;
console.log(api);


fetch(api)
.then(response => {
    return response.json();
})
.then(data => {
    console.log(data);
    const {temperature , summary} = data.currently;
    temperatureDegree.textContent = temperature;
})


navigator.geolocation.getCurrentPosition(positon => {
    long = positon.coords.longitude;
    lat = positon.coords.latitude;

    console.log(long , lat);
    
    
    
})