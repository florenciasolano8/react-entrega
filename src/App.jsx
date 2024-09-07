import './App.css'
import { NavBar } from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemCount from './components/ItemCount/ItemCount' 

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

</Routes>
</BrowserRouter>

<ItemCount initial={1} stock={10} onAdd={(quantity) => console.log('Cantidad agregada ',quantity)}/>

</>
  );
}

export default App
