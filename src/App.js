import "./App.css"
import NavBar from './Componentes/NavBar';
import ItemListContainer from "./Componentes/ItemListContainer";

function App() {
  return (
    <div className = "App">
      <NavBar/>
      <ItemListContainer className="itemListContainer" greetings="Welcome to my React app coders!"/>
    </div>
  );
}

export default App;