import Shape6 from '../../img/Shape 6.png'
import Shape14 from '../../img/Shape 14.png'
const Messages = () => {
    return(
        <span className="fLeft white-p smBox hadow"  >
      <div>
        <span className="fLeft">
        <img src={Shape14}/>
        <span className="titleSmall">Messages</span>
        </span>
        <span><img className="fRight " src={Shape6}/></span>
      </div>
      <div className="ui relaxed items " >
        <div className="item itemBorder" >

          <div className="middle aligned content ">
            <span className=" msg">Too cultivated use solicitude</span><br/>
            <span className="small">March 5, 08.95 PM</span>
          </div>
          <div className="ui tiny ml-2">
           <a> <i className="fas fa-arrow-right " ></i></a>
          </div>
        </div>
        <div className="item itemBorder">

          <div className="middle aligned content">
            <span className="msg">Barton did feebly change man</span><br/>
            <span className="small">March 4, 02.30 AM</span>
          </div>
          <div className="ui tiny ml-2">
           <a> <i className="fas fa-arrow-right"></i></a>
          </div>
        </div>
        <div className="item itemBorder">

          <div className="middle aligned content">
            <span className="msg">Indulgence ten remarkably</span><br/>
            <span className="small">March 2, 11.20 AM</span>
          </div>
          <div className="ui tiny ml-2">
           <a> <i className="fas fa-arrow-right"></i></a>
          </div>
        </div>
      </div>
  </span> 
    )
}
export default Messages