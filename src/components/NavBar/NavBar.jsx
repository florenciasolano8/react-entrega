import { CartWidget } from "../CartWidget/CartWidget"
import "./navBar.css"
import logo from "../../assets/logo.png"
import{
  Link,
} from "react-router-dom";

export const NavBar = () => {
  return (
    <div className="header">
      <div className="container-logo">
        <img src={logo} alt="logo" className="logo" />
        <p className="nombre-logo">Candys</p>
        </div>
        <nav>
        <ul>
            <li><Link to='/'>Inicio</Link></li>
            <li><Link to='/tasks'>Tienda</Link></li>
            <li><Link to ='/faq'>FAQ</Link></li>
        </ul>
    </nav>
    <div className="carrito-producto">
    <p className="numero-producto">4</p>
        <CartWidget/>
    </div>
    </div>

)
}
