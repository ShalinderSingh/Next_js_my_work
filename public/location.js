console.log("loction file loaded")

function getLocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition);
    }else{
        x.innerHTML="Geolocation is not supported by this browser"
    }
}

function showPosition(poistion){
    console.log(poistion)
}

getLocation()