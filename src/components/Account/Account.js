import Shape23 from '../../img/Shape 23.png'
import Shape6 from '../../img/Shape 6.png'
import './circleBalance.css';
import './stylesArrow.css';
const Account = () => {
    return(
        <span className="fLeft white-p smBox hadow">
        <div>
        <span className="fLeft">
          <img src={Shape23}/>
          <span className="titleSmall">Account</span>
        </span>
          <span><img className="fRight " src={Shape6}/></span>
        </div>
        <span id="balanceLabel">Current<br/>Balance</span>
  
        <div className="progress-circle2 progressing p-30 " style={{"margin": 4.5+"rem", "marginBottom":15+"px", "marginTop": 3+"rem", "position":"relative"}}>
          <div className="progress-circle-border2">
            <div className="left-half-circle2"></div><div className="right-half-circle2"></div>
          </div>
          <div className="progress-circle-content2">
              <div id="insideArrow">
                  <span id="inText">$ 120</span>
                 </div>
          </div>
        </div>
  
    </span>
    )
}
export default Account