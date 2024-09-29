import './App.css'
import NavBar  from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer  from './components/ItemDetailContainer/ItemDetailContainer'
import CartContainer from './components/CartContainer'
import Checkout from './components/Checkout'


import{
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return(
    <>
<BrowserRouter>
<NavBar/>

<Routes>
<Route path="/" element={<ItemListContainer/>} />
<Route path="/product/:id" element={<ItemDetailContainer/>} />
<Route path="/category/:id" element={<ItemListContainer/>} />
<Route path="/cart" element={<CartContainer/>} />
<Route path="/checkout" element={<Checkout/>} />




</Routes>
</BrowserRouter>

</>
  );
}

export default App
