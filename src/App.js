import "./App.css"
import NavBar from './Componentes/NavBar/NavBar';
import ItemListContainer from "./Componentes/Item/ItemListContainer";
import ItemDetailContainer from "./Componentes/ItemDetails/ItemDetailContainer";
import {Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className = "App">
      <NavBar/>
      <Switch>
        <Route exact path="/">
          <ItemListContainer className="itemListContainer" greetings="WELCOME TO DECO.ETC ONLINE SHOP!"/>
        </Route>
        <Route path="/categories/:catId">
          <ItemListContainer className="itemListContainer" greetings="WELCOME TO DECO.ETC ONLINE SHOP!"/>
        </Route>
        <Route path='/item/:id'>
          <ItemDetailContainer/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;