import Badge from "react-bootstrap/Badge"
import Button from "react-bootstrap/Button"
import { useCartContext } from "../../context/cartContext"
import { Link } from "react-router-dom"

 const CartWidget = () => {
  const {cart} = useCartContext()
  return (
    <Button as={Link} to="/cart">
      Cart <Badge bg="secondary">{cart.length}</Badge>
    </Button>
  )
}
export default CartWidget