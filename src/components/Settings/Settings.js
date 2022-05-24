import Shape24 from '../../img/Shape 24.png'
import Shape6 from '../../img/Shape 6.png'
import $ from 'jquery';
import './stylesRangeslider.min.css';
import { useEffect, useCallback, useState } from 'react';
import { Dropdown, Radio } from 'semantic-ui-react'
import Slider from '@mui/material/Slider';
const Settings = ({currencyCallback, weatherCallback}) => {
  const [currency, setCurrency] = useState("$")
 
    // var mySlider1 = document.getElementById('slider1');
    // mySlider1.addEventListener('input', (ev) => {
        
    // document.getElementById("body_id").style.filter = `brightness(${ev.target.value}%)`;
    //  document.getElementById("body_id").style.backdropFilter = `brightness(${ev.target.value}%)`;
  //})
  //rangesliderJs.create(mySlider1);

   
    //rangesliderJs.create(mySlider2);
    const onWeatherChange = (val) =>{
      weatherCallback(val);
    }
const changeBrightness = (val) =>{
  document.getElementById("body_id").style.filter = `brightness(${val}%)`;
  document.getElementById("body_id").style.backdropFilter = `brightness(${val}%)`;
  console.log(val)
}
const changeCurrencyHandler = (val) =>{
  currencyCallback(val);
$('#inText').text(val+120);
$('#curQuareterLarge').text(val);
$('#curQuareterSmall').text(val);
}
  
    return(
        <span class="fRight white-p smBox hadow">
    <div>
      <span className="fLeft">
        <img src={Shape24}/>
        <span class="titleSmall">Settings</span>
      </span>
      <span><img class="fRight " src={Shape6}/></span>
    </div>
    <div class="ui two column grid p-0">
      <div class="row h-30">
        <div class="column">Screen brightness</div>

          <div class="column fRight">

              <Slider
              size="medium"
              defaultValue={100}
              aria-label="small"
              valueLabelDisplay="auto"
              onChange={(props, context)=> {changeBrightness(context)}}
            />
          </div>


      </div>
      <div class="row h-30">
        <div class="column">Sound Volume</div>
        <div class="column fRight">
        <Slider
        size="medium"
        defaultValue={50}
        aria-label="small"
        valueLabelDisplay="auto"
      />
          {/* <input id="slider2" type="range" min="0" max="100" value="50" step="1" /> */}
        </div>
      </div>
      <div class="row h-30">
        <div class="column">Currency</div>
        <div class="column fRight">
       
          <Dropdown 
          defaultValue = {"$"}
          
            className="ui dropdown curencyDropdown dropCur fRight" id="select"
            onChange={(props,context)=> changeCurrencyHandler(context.value)}
            options={[{value:"$", text:"Dollar"},{value:"£", text:"Pounds"},{value:"€", text:"Euro"}]}/>
        </div>
      </div>
      <div class="row h-30">
        <div class="column">Weather</div>
        <div class="column ">
         
          <Radio toggle defaultChecked onChange={(props, context) => {onWeatherChange(context.checked)}}/>
            
        </div>
      </div>
      </div>
  </span>

    )
}
export default Settings