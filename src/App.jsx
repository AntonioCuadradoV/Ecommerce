import Navbar from "./components/NavbarMenu";
import ItemListContainer from "./components/ItemListContainer";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Navbar />
      <ItemListContainer mensaje={'Bienvenido a mi pagina'}/>
    </>
  );
}

export default App;
