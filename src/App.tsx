import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import { Educacao } from './Educacao';
import { Experiencia } from './Experiencia';
import { Habilidades } from './Habilidades';
import { Sobre } from './Sobre';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Sobre}/>
          <Route path="/Sobre" component={Sobre}/>
          <Route path="/Habilidades" component={Habilidades}/>
          <Route path="/Experiencia" component={Experiencia}/>
          <Route path="/Educacao" component={Educacao}/>
        </Switch>
      </BrowserRouter>
    </div>
  )}

export default App;
