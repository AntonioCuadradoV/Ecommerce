import Navbar from "./components/NavbarMenu";
import ItemListContainer from "./components/ItemListContainer";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ItemCount from "./components/ItemCount";

function App() {
  return (
    <>
      <Navbar/>
      <ItemListContainer mensaje={'Bienvenido a mi pagina'}/>
      <ItemCount stock={12}/>
    </>
  );
}

export default App;
