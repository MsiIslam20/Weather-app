//ON window load function will be execute
window.addEventListener("load", () => {
    let temperatureDegree = document.querySelector(".temperature-degree");
    let cityName = document.getElementById("cityName");
    let weatherStatus = document.getElementById("status");
    let weatherIcon = document.getElementById("weatherIcon");

    //get input value and submit button for getting all formation
    document.getElementById("submit-id").addEventListener("click", function(){
        const findValue = document.getElementById("get-value").value;
        getResults(findValue);
        
    })

    //API call
    function getResults(valueCity) {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${valueCity}&units=metric&APPID=6f0afe92ff5231fed4df9aeac089587d`)
            .then(weather => {
                return weather.json();
            })
            .then(data => {
                console.log(data);
                // const {name} = data;
                let getWeather = data.weather[0].icon;
                getWeather = getWeather.slice(0,2) + "d";
                temperatureDegree.textContent = data.main.temp;
                cityName.innerText = data.name;
                weatherStatus.innerText = data.weather[0].main;
                weatherIcon.src = `https://openweathermap.org/img/wn/${getWeather}@2x.png`
                
            });
    }
});
