import './App.css';
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Greeting from './components/ItemListContainer/Greeting';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

//PAGES
import Products from './components/Pages/Products/Products';
import Error from './components/Pages/Error/Error';
import ProductsDetails from "./components/Pages/ProductsDetails/ProductsDetails";
import Contact from "./components/Pages/Contact/Contact";
import Home from './components/Pages/Home/Home';
import Cart from './components/Pages/Cart/Cart';
import { CartProvider } from "./Context/CartContext";
import Checkout from './components/Checkout/Checkout';

import Category from "./components/NavBar/Category/Category";

function App() {

  return (
  <CartProvider>
    <Router>
    <div className="App">
      <NavBar/>
      <Header/>
      <Routes>
        <Route path= "/" element={<Home/>} />
        <Route path= "/products" element={<Products />} />
        <Route path= "/ProductsDetails/:id" element={<ProductsDetails />} />
        <Route path="/Category/:category" element={<Category/>} /> 
        <Route path= "/Contact" element={<Contact />} />
        <Route path= "/Cart" element={<Cart />} />
        <Route path= "/Checkout" element={<Checkout />} />
        <Route path= "*" element={<Error />} />
      </Routes>
      <Footer/>
    </div>
    </Router>
    </CartProvider>
  );
}

export default App;
