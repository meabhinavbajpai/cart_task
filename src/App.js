import logo from './logo.svg';
import './App.css';
import ProductList from './Components/ProductList';
import Cart from './Components/Cart';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Navbar';

function App() {
  return (
    <>
    <Router>
    <Header/>

    <Routes>
      <Route path="/" element={<ProductList/>}/>
      <Route path="/cart" element={<Cart/>}/>

    </Routes>
    </Router>
    
    </>
   
  );
}

export default App;
