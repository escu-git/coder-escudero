import "./App.css"
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from "./Components/Item/ItemListContainer";
import ItemDetailContainer from "./Components/ItemDetails/ItemDetailContainer";
import CartContainer from './Components/Cart/CartContainer'
import {BrowserRouter as Router} from 'react-router-dom'
import {Switch, Route} from 'react-router-dom';
import {CartProvider} from './Components/Contexts/CartContext';

function App() {
  return (
    <div className = "App">
      <CartProvider>
        <Router>
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
              <CartContainer/>
            </Route>
          </Switch>
        </Router>
      </CartProvider>
    </div>
  );
}

export default App;