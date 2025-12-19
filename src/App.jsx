import Navbar from "./components/NavbarMenu";
import ItemListContainer from "./components/ItemListContainer";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from "./components/Error"
import { CartProvider } from "./context/CartContext";
import CartContainer from "./components/CartContainer"
import Checkout from "./components/Checkout";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
      <Navbar/>
      <Routes>
        <Route path="/" element={<ItemListContainer mensaje={'Todo lo que necesitás, en un solo lugar'}/>}/>
        <Route path="/category/:type" element={<ItemListContainer/>}/>
        <Route path="/item/:id" element={<ItemDetailContainer/>}/>
        <Route path="/cart" element={<CartContainer/>}/>        
        <Route path="/checkout" element={<Checkout/>}/>        
        <Route path="*" element={<Error/>}/>
      </Routes>      
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
