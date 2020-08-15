window.addEventListener("load", () => {
    let temperatureDegree = document.querySelector(".temperature-degree");
    let cityName = document.getElementById("cityName");
    let weatherStatus = document.getElementById("status");

    document.getElementById("submit-id").addEventListener("click", function(){
        const findValue = document.getElementById("get-value").value;
        getResults(findValue);
        
    })

    function getResults(valueCity) {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${valueCity}&units=metric&APPID=6f0afe92ff5231fed4df9aeac089587d`)
            .then(weather => {
                return weather.json();
            })
            .then(data => {
                console.log(data);
                // const {name} = data;
                // const {temp} = data.main;
                temperatureDegree.textContent = data.main.temp;
                cityName.innerText = data.name;
                weatherStatus.innerText = data.weather[0].main;
                
            });
    }
});