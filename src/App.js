import Main from './components/Main/Main';
import NotFound from './components/NotFound/NotFound';
import './App.scss';
import { BrowserRouter, Switch , Route } from 'react-router-dom';
function App() {
  return (
    
        
        <BrowserRouter>
       
          <Switch>
            <Route path="/" exact component={Main} />
            <Route path="*" exact component={NotFound} />
          </Switch>
      
      </BrowserRouter>
  
  );
}

export default App;
