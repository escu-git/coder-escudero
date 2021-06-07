import "./App.css"
import NavBar from './Componentes/NavBar/NavBar';
import ItemListContainer from "./Componentes/Item/ItemListContainer";
import ItemDetailContainer from "./Componentes/ItemDetails/ItemDetailContainer";
import Cart from '../src/Componentes/Cart/Cart'
import {Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className = "App">
      <NavBar/>
      <Switch>
        <Route exact path="/">
          <ItemListContainer className="itemListContainer"/>
        </Route>
        <Route exact path="/categories/:catId">
          <ItemListContainer className="itemListContainer" greetings="WELCOME TO DECO.ETC ONLINE SHOP!"/>
        </Route>
        <Route exact path='/item/:id'>
          <ItemDetailContainer/>
        </Route>
        <Route exact path='/cart'>
          <Cart/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;