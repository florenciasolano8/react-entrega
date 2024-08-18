import { CartWidget } from "../CartWidget/CartWidget"
import "./navBar.css"
import logo from "../../assets/logo.png"

export const NavBar = () => {
  return (
    <div className="header">
      <div className="container-logo">
        <img src={logo} alt="logo" className="logo" />
        <p className="nombre-logo">Candys</p>
        </div>
        <nav>
        <ul>
            <li><a href ="link1">link1</a></li>
            <li><a href ="link2">link2</a></li>
            <li><a href ="link3">link3</a></li>
        </ul>
    </nav>
        <CartWidget/>
    </div>

)
}
