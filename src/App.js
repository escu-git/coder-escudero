import "./Styles/styles.css"
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from "./Components/Item/ItemListContainer";
import ItemDetailContainer from "./Components/ItemDetails/ItemDetailContainer";
import CartContainer from './Components/Cart/CartContainer'
import {BrowserRouter as Router} from 'react-router-dom'
import {Switch, Route} from 'react-router-dom';
import {CartProvider} from './Contexts/CartContext';
import {AuthProvider} from './Contexts/AuthContext'
import Purchased from "./Components/PurchasedProducts/Purchased";
import SignUp from "./Components/Authentication/SignUp";
import Login from "./Components/Authentication/Login";
import CheckPurchase from "./Components/PurchasedProducts/PurchaseHistory/CheckPurchase";
import CustomItem from "./Components/Item/CustomItem/CustomItem";

function App() {
  return (
    <div className = "App">
      <AuthProvider>
        <CartProvider>
          <Router>
            <NavBar/>
            <Switch>
              <Route exact path="/">
                <ItemListContainer className="itemListContainer"/>
              </Route>
              <Route exact path='/register'>
                <SignUp/>
              </Route>
              <Route exact path='/signin'>
                <Login/>
              </Route>
              <Route exact path="/categories/:catId">
                <ItemListContainer className="itemListContainer" greetings="WELCOME TO DECO.ETC ONLINE SHOP!"/>
              </Route>
              <Route exact path='/item/:id'>
                <ItemDetailContainer/>
              </Route>
              <Route exact path='/custom-design'>
                <CustomItem/>
              </Route>
              <Route exact path='/cart'>
                <CartContainer/>
              </Route>
              <Route exact path='/purchase'>
                <Purchased/>
              </Route>
              <Route exact path='/purchase-history'>
                <CheckPurchase/>
              </Route>
            </Switch>
          </Router>
        </CartProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
