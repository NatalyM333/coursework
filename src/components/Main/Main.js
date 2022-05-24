import Header from '../Header/Header';
import ChartGas from '../ChartGas/ChartGas';
import ChartElectric from '../ChartElectric/ChartElectric';
import Messages from '../Messages/Messages';
import Tariff from '../Tariff/Tariff';
import Account from '../Account/Account';
import '../../App.scss';
import Settings from '../Settings/Settings';
import { useEffect, useState, useCallback } from 'react';
function Main() {
  const [currency, setCurrency] = useState("$")
  const [weather, setWeather] = useState(true);
  const callback = useCallback((currency) => {
    setCurrency(currency);
  }, []);
  const callbackWeatcher = useCallback((weather) => {
    setWeather(weather);
  }, []);
  return (
    <div className="App">
      <Header weatherShow={weather}/>
      <div className="containert pRelative" style={{"height":420+"px"}}>
        <ChartGas currency={currency}/>
        <ChartElectric currency={currency}/>
        </div>
        <div class="containert pRelative " >
        <div class="container pRelative fLeft smContainer ">
          <Messages/>
          <Tariff/>
        </div>
        <div class="container pRelative fRight smContainer Block" >
          <Account/>
          <Settings currencyCallback={callback} weatherCallback={callbackWeatcher}/>
        </div>
        </div>
    </div>
  );
}

export default Main;
