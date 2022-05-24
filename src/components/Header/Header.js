import $ from 'jquery';
import './style.scss';
import Shape1 from '../../img/Shape 1.png'
import { useEffect } from 'react';
const Header = ({weatherShow}) => {
const getWeekDay = (date) => {

  var  optionsDate = {
  
       weekday:'long'
    };
    return date.toLocaleString('eng', optionsDate);
  }
  const getMONTHS = (date) => {
  
  var  optionsDate = {
  
       month:'long'
    };
    return date.toLocaleString('eng', optionsDate);
  }

  useEffect (()=>{
    showTime()
    onWeatherChange()
  },[weatherShow])
  const onWeatherChange = () =>{
    console.log(weatherShow);
      if (!weatherShow){ 
        $('#wicon').removeAttr("src");
        $('#wicon').hide();
        $('#tempNow').text('');
      }
      else{
       $('#wicon').show(); 
        weather(); 
      } 
  }
const showTime = () => {
  var date = new Date();
  var h = date.getHours(); // 0 - 23
  var m = date.getMinutes(); // 0 - 59
  var session = "AM";
  if(h == 0){
      h = 12;
  }
  if(h > 12){
      h = h - 12;
      session = "PM";
  }
  h = (h < 10) ? "0" + h : h;
  m = (m < 10) ? "0" + m : m;
  var time = h + ":" + m ;
  document.getElementById("MyClockDisplay").innerHTML = `${time} <sup style="font-size:18px ; top:-40px;">${session}</sup>`;
  document.getElementById("day").innerHTML = `${getWeekDay(date).slice(0,3)} `;
  document.getElementById("month").innerHTML = `${getMONTHS(date).slice(0,3)} ${date.getUTCDate()} `;
  setTimeout(showTime, 1000);

}
const weather = () =>{
  navigator.geolocation.getCurrentPosition(function (position) {

    var lat = position.coords.latitude.toString();

    var lon = position.coords.longitude.toString();
   getWeather(lat, lon);
});

}
const getWeather = (lat, lon) => {
    $.get(
        `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=ua&APPID=e49e1f56190e3b14ecb27c17e406bc2d`,
        function (data, status) {
            currentWeatherInformation(data);
        });

}
const currentWeatherInformation = (data) => {

  let icon = data.weather[0].icon;
  var icon_url = "http://openweathermap.org/img/w/" + icon + ".png";
  let tempC = convertKelvinToCelsius(data.main.temp);
  $('#wicon').attr("src", icon_url);
  $('#tempNow').append(`${tempC}<sup>o</sup>C`);
}
const convertKelvinToCelsius = (value) =>{
  return Math.round(value - 273.15);
}

    return(
        <div className="containert pageTop pRelative">
        <img id="shapeTop" src={Shape1} className="fLeft"/>
        <span id="MyClockDisplay" className="clock fLeft m-30" > </span>
        <span id="date" className="fLeft">
            <span id="day" ></span>
            <br/>
            <span id="month" ></span>
        </span>
        <span  id="tempNow" className="fRight m-30 Block"></span>
        <span  className="fRight Block">
          <img id="wicon"  src="" alt="Weather icon" />
        </span>
      </div>
    )
}
export default Header