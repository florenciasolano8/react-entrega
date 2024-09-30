import { useCartContext } from "../context/cartContext"
import { Link } from "react-router-dom"
import "./cartContainer.css"


function CartContainer() {
  const { cart, getTotal, removeFromCart } = useCartContext()
  getTotal()
  return (
    <div className="detalles-compra">
      <p>Total: ${getTotal()}</p>
      {cart.map((prod) => (
        <div key={prod.id} className="carrito-item">
          <p>{prod.name} - Cantidad: {prod.quantity}</p>
        <button className="borrar-boton" onClick={() => removeFromCart(prod.id)}>x</button>
        </div>
      ))}
      <Link to="/checkout">terminar compra</Link>
    </div>
  )
}
export default CartContainer
