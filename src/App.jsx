import './App.css'
import { NavBar } from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemCount from './components/ItemCount/ItemCount' 
import {Home} from './components/Home/Home'

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
<ItemListContainer/>


<Routes>
<Route path="/" element={<Home/>} />

</Routes>
</BrowserRouter>

<ItemCount initial={1} stock={10} onAdd={(quantity) => console.log('Cantidad agregada ',quantity)}/>

</>
  );
}

export default App
