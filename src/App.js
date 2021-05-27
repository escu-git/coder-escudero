import "./App.css"
import NavBar from './Componentes/NavBar';
import ItemListContainer from "./Componentes/ItemListContainer";
import ItemDetailContainer from "./Componentes/ItemDetailContainer";


function App() {
  return (
    <div className = "App">
      <NavBar/>
      <ItemListContainer className="itemListContainer" greetings="WELCOME TO DECO.ETC ONLINE SHOP!"/>
      <ItemDetailContainer/>
    </div>
  );
}

export default App;