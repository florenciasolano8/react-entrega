import  CartWidget  from "../CartWidget/CartWidget"
import "./navBar.css"
import logo from "../../assets/logo.png"
import { Link } from "react-router-dom"

const NavBar = () => {

  return (
    <div className="header">
      <div className="container-logo">
        <Link to='/'>
          <img src={logo} alt="logo" className="logo" />
        </Link>
        <p className="nombre-logo">Candys</p>
      </div>
      <nav>
        <ul>
        <li><Link to={`/`}>Todo</Link></li>
          <li><Link to={`category/Electronics`}>Electronicos</Link></li>
          <li><Link to={`category/Movies`}>Peliculas</Link></li>
          <li><Link to={`category/Toys`}>Juguetes</Link></li>
          <li><Link to={`category/Beauty`}>Belleza</Link></li>

        </ul>
      </nav>
      <div className="carrito-producto">
        <CartWidget />
      </div>
    </div>
  )
}
export default NavBar
