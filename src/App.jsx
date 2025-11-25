import Navbar from "./components/NavbarMenu";
import ItemListContainer from "./components/ItemListContainer";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from "./components/Error"

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<ItemListContainer mensaje={'Bienvenido a mi pagina'}/>}/>
        <Route path="/category/:type" element={<ItemListContainer/>}/>
        <Route path="/item/:id" element={<ItemDetailContainer/>}/>
        
        <Route path="*" element={<Error/>}/>
      </Routes>      
    </BrowserRouter>
  );
}

export default App;
