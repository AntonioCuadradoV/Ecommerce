import Navbar from "./components/NavbarMenu";
import ItemListContainer from "./components/ItemListContainer";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from "./components/Error"
import { CartProvider } from "./context/CartContext";
import CartContainer from "./components/CartContainer"

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
      <Navbar/>
      <Routes>
        <Route path="/" element={<ItemListContainer mensaje={'Bienvenido a mi pagina'}/>}/>
        <Route path="/category/:type" element={<ItemListContainer/>}/>
        <Route path="/item/:id" element={<ItemDetailContainer/>}/>
        <Route path="cart/" element={<CartContainer/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>      
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
