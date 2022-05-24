import $ from 'jquery';
import '../../App.scss';
import icon from '../../img/icon.png'
import Shape6 from '../../img/Shape 6.png'
import Shape7 from '../../img/Shape 7.png'
import Shape8 from '../../img/Shape 8.png'
import Chart from "react-apexcharts";
import { useEffect, useState } from 'react';
import Data  from './Data.json';
import { Dropdown } from 'semantic-ui-react'

const ChartGas = ({currency}) => {
const [period, setPeriod] = useState("monthly");
const [op, setOp] = useState([]);
const [serie, setSerie] = useState([]);
const [loader, setLoader] = useState(true);
var litres = "";
var price ="";
const updateSerie=()=> {
  options.xaxis.categories = category(period);
  series.data=  Usage();
  series.data=  Target(Data);
  console.log( options.xaxis.categories)  
}

const Usage=()=> {
  console.log("usage");
  if(period=='monthly')
 {
  setVal(Data.Current_usage_monthlyGas);
   return Data.Current_usage_monthlyGas;
 
 }
  else
 {
  setVal(Data.Current_usage_daylyGas);
   return Data.Current_usage_daylyGas;
 }
}


const category=(per)=> {
  if(per=='monthly')
  return ["Ja", "Fe", "Ma", "Ap", "Ma", "Ju", "Ji","Au","Se", "Oc", "No", "De"];
  else
  return ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];
}
const Target=(data)=> {
  if(period=='monthly')
  return Data.Target_amount_monthlyGas;
  else
  return Data.Target_amount_daylyGas;
}

const setVal=(data)=>{
  var sum=0;
  data.forEach(element => {
    sum+=element;
  });

  if(document.getElementById("litre"))
   { document.getElementById("litre").innerHTML=Math.round(sum/12)+' litre';
  litres ="";
  }
  else{
    litres = Math.round(sum/12)+' litre';
  }
   
  if(document.getElementById("priceE"))
    {document.getElementById("priceE").innerHTML=cost(sum)+currency; 
    price = "";
  }
    else{
      price = cost(sum)+currency; 
    }
}

const changePeriodHandler=(newPeriod)=>{
  console.log("changePeriodHandler");

  setPeriod(newPeriod);
  updateSerie();
}

const cost=(litre)=>{
return litre*28;
}

const options = {
    colors: ['#59c7e1', '#85dcc9'],
    
    chart: {
        toolbar: {
            show: false,
        },
      type: 'area',
      zoom: {
        enabled: false
      },
      
    },
    grid: {
        show: true,
        borderColor: '#e5f3f7',
        strokeDashArray: 0,
        position: 'back',
        xaxis: {
            lines: {
                show: true
            }
        },   
       
       
    },
    legend: {
        position: 'top',
        horizontalAlign: 'left',
        offsetY: -35,
        offsetX: 22,
        fontSize: '14px',
        fontFamily: 'Helvetica, Arial',
        fontWeight: 400,
        labels: {
            colors: '#9da8bc',
           
        },
        inverseOrder: true,
        
      },
    dataLabels: {
        enabled: false,
      },
    
    stroke: {
        curve: 'straight'
      },
      subtitle: {
        text: `.`,
        align: 'left',
        margin: 10,
        offsetX: 20,
        offsetY: 30,
        floating: false,
        style: {
          fontSize:  '12px',
          fontWeight:  'normal',
          fontFamily:  undefined,
          color:  '#fff'
        },
    },
    
    xaxis: {
        axisBorder: {
            show: true,
            color: '#78909C',
      height: 1,
      width: '100%',
      offsetX: 0,
      offsetY: 0
        },
       
  crosshairs: {
    show: false,  
 },

      categories: category(period)
    },
    yaxis: {
        categories: [0, 100, 200, 300, 400, 500]
      },
    tooltip: {
        shared:false,
        intersect: false,
        custom: function({series, seriesIndex, dataPointIndex, w}) {
          
            return '<div class="arrow_box">' +
              '<span>' + series[seriesIndex][dataPointIndex] +' litre'+'<br>'+cost(series[seriesIndex][dataPointIndex])+currency +'</span>' +
              '</div>'
          },
          
    }
}
const series =[{
      name: 'Current usage',
      data: Usage() 
    },
      {
        name: 'Target amount',
        data: Target(Data)
    }
]
const fetch=()=>{
  var l = true;
   setSerie(series);
   setOp(options);
  if(op && serie)
   l = false;
  setLoader(l);
}
useEffect (()=>{
    fetch();
   },[period, currency])
return( <>
{!loader ?(
   
    <span className="fLeft white-p hadow">
    <div className="Gas pRelative">
    <span className="fLeft">
      <img src={icon}/>
      <span className="titleLarge"> Gas usage</span>
      </span>
      <span><img className="fRight mr-1" src={Shape6}/></span>
     
      <Dropdown 
       defaultValue={"monthly"}
       className="ui dropdown curencyDropdown  fRight  rBlue-45 mr-1 dropdownGas" id="select"
       onChange={(props)=> changePeriodHandler(props.currentTarget.firstChild.firstChild.textContent)}
       options={[{value:"monthly", text:"monthly"},{value:"daily", text:"daily"}]}/>
    </div>
    
    <div className="  fInfo" >
      <span className="mr-1 ml-2 fLeft pRelative"><img className="fLeft mr-1" src={Shape7}/><span className="mr-1" id="periodLabel">{period}</span><span id="litre" >{litres}</span></span>
      <span className="mr-1 ml-2 fRight pRelative"> 
        <span><img className="fLeft mr-1" src={Shape8}/></span>
        <span>Total</span>
        <span id="priceE" className=" ml-1" >{price}</span>
      </span>
    </div>
    <span>
    <Chart id = "chart"
    options={op}
    series={serie}
    type="area"
    width={540+"px"}
    height={365+"px"}
    />
    </span>
</span>)
: <div>loading...</div>}
</>
)
}
export default ChartGas