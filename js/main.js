let city = document.querySelector('.cityname');
let btncheckweather = document.querySelector('.btncheckweather');
let locBtn = document.querySelector('.locBtn');
let output = document.getElementById('output');

btncheckweather.addEventListener('click',checkWeather);
function checkWeather(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q=Iui-dong&units=metric&lang=kr&appid=95dee54b3cad98577c2781df6292f75a') // 이의동의 날씨
    .then(response => response.json())
    .then(data =>{
        console.log(data);
        console.log(data['main'])
        console.log(data['main']['temp']);
        console.log(data['weather'])
        console.log(data['weather'][0]['id']);
        console.log(data['weather'][0]['main']);
        console.log(data['weather'][0]['description']);

        let condition = data['weather'][0]['main'];

        $(function () {
        if(condition=="Clear"){ // 맑음
            $("#weather-now").html('<Br><br><img src="../myWEBProject/assets/img/weather_sunny.png" width="300" height="300" alt="">');
            $("#weather-now").css('display', 'block');
        }
        else if(condition=="Clouds"){ // 구름, 흐림
            $("#weather-now").html('<Br><br><img src="../myWEBProject/assets/img/weather_cloud.png" width="417" height="300" alt="">');
            $("#weather-now").css('display', 'block');
        }
        else if(condition=="Thunderstorm"){ // 번개
            $("#weather-now").html('<Br><br><img src="../myWEBProject/assets/img/weather_thunderstorm.png" width="190" height="300" alt="">');
            $("#weather-now").css('display', 'block');
        }
        else if(condition=="Snow"){ // 눈
            $("#weather-now").html('<Br><br><img src="../myWEBProject/assets/img/weather_snow.png" width="300" height="300" alt="">');
            $("#weather-now").css('display', 'block');
        }
        else if(condition=="Rain"){ // 비
            $("#weather-now").html('<Br><br><img src="../myWEBProject/assets/img/weather_rain.png" width="300" height="300" alt="">');
            $("#weather-now").css('display', 'block');
        }
        else if(condition=="Drizzle"){ //보슬비
            $("#weather-now").html('<Br><br><img src="../myWEBProject/assets/img/weather_rain.png" width="300" height="300" alt="">');
            $("#weather-now").css('display', 'block');
        }
        else if(condition=="Mist" || condition=="smoke" || condition=="Haze" || condition=="Dust" || condition=="Fog" ){ // 안개
            $("#weather-now").html('<Br><br><img src="..//assets/img/weather_fog.png" width="300" height="300" alt="">');
            $("#weather-now").css('display', 'block');
        }
        

    output.innerHTML =`<br>`+ data['main']['temp']+'°C'+`<br>`+data['weather'][0]['description'];
    output.style.cssText = "text-align:center; padding:35px; font-size:1.5em;"
});
        /*
        output.style.cssText ='width: 0 auto; background:#c3ffe5; text-align:center; width:150px;'    */
    })
   

    .catch(err=>alert("error"));
}
locBtn.addEventListener('click',showPosition);
function showPosition() {
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var lat = position.coords.latitude;
            var lon = position.coords.longitude;
            // document.getElementById("lat").innerHTML = lat;
            // document.getElementById("lon").innerHTML = lon;
            fetch('https://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lon+'&units=metric&lang=kr&appid=95dee54b3cad98577c2781df6292f75a') // 현재의 위치 파악 후 날씨 정보 받아옴
            .then(response => response.json())
            .then(data =>{
                let condition = data['weather'][0]['main'];
                $(function () {
                    if(condition=="Clear"){ // 맑음
                        $("#weather-now").html('<Br><br><img src="../myWEBProject/assets/img/weather_sunny.png" width="300" height="300" alt="">');
                        $("#weather-now").css('display', 'block');
                    }
                    else if(condition=="Clouds"){ // 구름, 흐림
                        $("#weather-now").html('<Br><br><img src="../myWEBProject/assets/img/weather_cloud.png" width="417" height="300" alt="">');
                        $("#weather-now").css('display', 'block');
                    }
                    else if(condition=="Thunderstorm"){ // 번개
                        $("#weather-now").html('<Br><br><img src="../myWEBProject/assets/img/weather_thunderstorm.png" width="190" height="300" alt="">');
                        $("#weather-now").css('display', 'block');
                    }
                    else if(condition=="Snow"){ // 눈
                        $("#weather-now").html('<Br><br><img src="../myWEBProject/assets/img/weather_snow.png" width="300" height="300" alt="">');
                        $("#weather-now").css('display', 'block');
                    }
                    else if(condition=="Rain"){ // 비 
                        $("#weather-now").html('<Br><br><img src="../myWEBProject/assets/img/weather_rain.png" width="300" height="300" alt="">');
                        $("#weather-now").css('display', 'block');
                    }
                    else if(condition=="Drizzle"){ // 보슬비
                        $("#weather-now").html('<Br><br><img src="../myWEBProject/assets/img/weather_rain.png" width="300" height="300" alt="">');
                        $("#weather-now").css('display', 'block');
                    }
                    else if(condition=="Mist" || condition=="smoke" || condition=="Haze" || condition=="Dust" || condition=="Fog" ){ // 안개
                        $("#weather-now").html('<Br><br><img src="../myWEBProject/assets/img/weather_fog.png" width="300" height="300" alt="">');
                        $("#weather-now").css('display', 'block');
                    }

                output.innerHTML =`<br>` + data['name'] + ' ' + data['main']['temp']+'°C'+`<br>`+data['weather'][0]['description'];
                output.style.cssText = "text-align:center; padding:35px; font-size:1.5em;"
                //output.style.cssText ='background:#c3ffe5; text-align:center; width:150px;'    
    })
    .catch(err=>alert("error"));

        });

    }); 
}
}
