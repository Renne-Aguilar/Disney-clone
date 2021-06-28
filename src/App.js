import Header from './Componentes/Header'
import Home from './Componentes/Home'
import Details from './Componentes/Details'
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './Componentes/Login';

function App() {
  return (
    <div className="App">
      <Router>
         <Header/>
         <Switch>
           <Route path="/login">
             <Login/>
           </Route>
           <Route path="/details">
             <Details/>
           </Route>
           <Route path="/">
             <Home/>
           </Route>
         </Switch>
      </Router>
       
       
       
    </div>
  );
}

export default App;
