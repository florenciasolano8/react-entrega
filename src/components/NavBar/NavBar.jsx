import CartWidget from "../CartWidget/CartWidget"
import "./navBar.css"
import logo from "../../assets/logo.png"
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="header">
      <div className="container-logo">
        <NavLink to="/">
          <img src={logo} alt="logo" className="logo" />
        </NavLink>
        <p className="nombre-logo">CanLib</p>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink to={`/`} className={({isActive})=> (isActive ? 'active' : '')}>
            Todo</NavLink>
          </li>
          <li>
            <NavLink to={`category/Resaltadores`}
            className={({isActive})=> (isActive ? 'active' : '')}>Resaltadores</NavLink>
          </li>
          <li>
            <NavLink to={`category/Cuadernos`}
            className={({isActive})=> (isActive ? 'active' : '')}>Cuadernos</NavLink>
          </li>
          <li>
            <NavLink to={`category/Lapiceras`}
            className={({isActive})=> (isActive ? 'active' : '')}>Lapiceras</NavLink>
          </li>
          <li>
            <NavLink to={`category/Lapices`}
            className={({isActive})=> (isActive ? 'active' : '')}>Lapices</NavLink>
          </li>
        </ul>
      </nav>
      <div>
        <CartWidget />
      </div>
    </div>
  )
}
export default NavBar
