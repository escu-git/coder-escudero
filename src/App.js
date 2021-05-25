import "./App.css"
import NavBar from './Componentes/NavBar';
import ItemListContainer from "./Componentes/ItemListContainer";
import ItemCount from "./Componentes/ItemCount";


function App() {
  return (
    <div className = "App">
      <NavBar/>
      <ItemListContainer className="itemListContainer" greetings="WELCOME TO DECO.ETC ONLINE SHOP!"/>
      <ItemCount className="itemCount"/>
    </div>
  );
}

export default App;