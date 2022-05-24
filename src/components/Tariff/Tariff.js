import Shape6 from '../../img/Shape 6.png';
import Shape8 from '../../img/Shape 8.png';
import $ from 'jquery';
import './circleProgress1.css';
import { useEffect } from 'react';
const Tariff = () =>{
    const forTariff = () => {
        console.log("tt")
        var today= new Date();
        if (today.getMonth()>=0&&today.getMonth()<=2)  {
            $('#currentQuarter').text('(Jan-Mar)');
            $('#End_of').text('March');
            const start=new Date(`01/01/${today.getFullYear()}`);
            const end = new Date(`03/31/${today.getFullYear()}`);
            dayProgressStart(start,end,today);
            $("#dayProgressStart").text('Jan 1');
            $("#dayProgressEnd").text('Mar 31');
        } else  if (today.getMonth()>=3&&today.getMonth()<=5)
        {
            $('#currentQuarter').text('(Apr-Jun)');
            $('#End_of').text('June');
           
            const start=new Date(`04/01/${today.getFullYear()}`);
            const end = new Date(`06/30/${today.getFullYear()}`);
            dayProgressStart(start,end,today);
            $("#dayProgressStart").text('Apr 1');
            $("#dayProgressEnd").text('Jun 31');
        }else  if (today.getMonth()>=6&&today.getMonth()<=9)
        {
            $('#currentQuarter').text('(Jul-Sep)');
            $('#End_of').text('September');
          
            const start=new Date(`07/01/${today.getFullYear()}`);
            const end = new Date(`09/30/${today.getFullYear()}`);
            dayProgressStart(start,end,today);
            $("#dayProgressStart").text('Jul 1');
            $("#dayProgressEnd").text('Sep 31');
        }else{
            $('#currentQuarter').text('(Oct-Dec)');
            $('#End_of').text('December');
          
            const start=new Date(`10/01/${today.getFullYear()}`);
            const end = new Date(`12/31/${today.getFullYear()}`);
            dayProgressStart(start,end,today);
            $("#dayProgressStart").text('Oct 1');
            $("#dayProgressEnd").text('Dec 31');
        }
    }
    const dayProgressStart = (start,end,today) => {
        const diffTimeAll = Math.abs(end - start);
        const diffDaysAll = Math.ceil(diffTimeAll / (1000 * 60 * 60 * 24));
        const diffTime = Math.abs(end - today);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        var percent=Math.round((diffDaysAll-diffDays)*100/diffDaysAll);
        // $('#dayProgress').progress({
        //     percent: percent
        //   });
        $('#progressingDay').addClass(`p-${percent}`); 
        $('#dayLabel').text(diffDays);
    }
    ////TO DO
    // const up = (value) => {
    //     $('#inText').text(value+120);
       
    //     $('#curQuareterLarge').text(value);
    //     $('#curQuareterSmall').text(value);
    //     currentVal(value);
       
    //   }
    useEffect (()=>{
       forTariff();
       },[])
    return(
        <span className="fRight white-p smBox hadow">

      <div>
      <span className="fLeft">
        <img src={Shape8}/>
        <span className="titleSmall">Tariff</span>
       </span>
        <span><img className="fRight " src={Shape6}/></span>
        
      </div>
      <div  style={{"marginTop": 2+"rem", "marginLeft": -5+"rem"}} className="fLeft">Current Quarter <span id="currentQuarter"></span></div>
          <div style={{"marginTop": 1 +"rem", "height": 150+"px;"}}>
            <div className="  fLeft vr-right">
            <div className=" statistic pRelative" style={{"height":40+"px"}}>
              <div className="value mt-1 mr-1">
               <span id="curQuareterLarge">$</span> 6500
              </div>
              <div className="label ">
                <i className="fas fa-arrow-up tariffArrow fLeft"></i>
                <span className="fLeft ml-1 " > <span id="curQuareterLarge"></span> 250</span>
              </div>

            </div>
            <div className="pRelative mt-1" style={{"height":20+"px"}}><span className="fLeft" id="dayProgressStart">start</span> <span id="dayProgressEnd" className="fRight">end</span></div>
            <div id="dayProgress" className="ui tiny progress pRelative " >

              <span className="bar" ></span>

            </div>
            </div>
          <div className="  fRight ">
            <span className="fRight white-p">
              <div id="progressingDay" className="progress-circle progressing ">
                <div className="progress-circle-border">
                  <div className="left-half-circle"></div><div className="right-half-circle"></div>
                </div>
                <div className="progress-circle-content">
                  <div ><span id="dayLabel"></span> <br/> days</div>

                </div>
              </div>
             <span style={{"fontSize": 12+"px"}}>Until End of <span id="End_of"></span></span>
            </span>
          </div>
          </div>
     </span>
    )
}
export default Tariff