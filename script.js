window.addEventListener("load", () => {
    let long;
    let lat;

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(positon => {
            long = positon.coords.longitude;
            lat = positon.coords.latitude;
        })
    }
})