/* eslint-disable react/prop-types */
import { useState } from "react"
import Button from "react-bootstrap/Button"
import Col from "react-bootstrap/Col"
import Form from "react-bootstrap/Form"
import InputGroup from "react-bootstrap/InputGroup"
import Row from "react-bootstrap/Row"
import ListGroup from "react-bootstrap/ListGroup"
import { useCartContext } from "../context/cartContext"
import { createOrder } from "../firebase/db"
import { serverTimestamp } from "firebase/firestore"
import { Modal } from "react-bootstrap"
import "./checkout.css"


function FormCheckout({ onOrderComplete }) {
  const { cart, getTotal } = useCartContext()

  const handleSubmit = async (event) => {
    event.preventDefault()

    const name = event.target.name.value
    const lastname = event.target.lastname.value
    const email = event.target.email.value

    const order = {
      buyer: { name, lastname, email },
      items: cart,
      date: serverTimestamp(),
      total: getTotal(),
    }

    const orderId = await createOrder(order)
    onOrderComplete(orderId) // Paso el ID
  }

  return (
    <Form noValidate onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="name">
          <Form.Label>nombre</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="nombre"
            autoComplete="nombre"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="lastname">
          <Form.Label>apellido</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="apellido"
            autoComplete="apellido"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="email">
          <Form.Label>email</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
            <Form.Control
              type="email"
              placeholder="email"
              aria-describedby="inputGroupPrepend"
              required
              autoComplete="email"
            />
            <Form.Control.Feedback type="invalid">
              Porfavor ingrese un email valido.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>

      <Button variant="danger" type="submit">Finalizar Compra</Button>
    </Form>
  )
}

function CheckoutData() {
  const { cart, clearCart, removeFromCart,getTotal } = useCartContext()

  return (
    <ListGroup>
      {cart.map((item) => (
        <ListGroup.Item key={item.id}>
          {item.name} x {item.quantity}u.
          <Button  variant="danger" onClick={() => removeFromCart(item.id)} >
            x
          </Button> 
        </ListGroup.Item>

      ))}
      <p>Total: ${getTotal()}</p>
      {cart.length > 0 && (
        <Button variant="danger" onClick={clearCart}>
          Vaciar Carrito
        </Button>
      )}
    </ListGroup>
  )
}

function MainComponent() {
  const [showModal, setShowModal] = useState(false)
  const [orderId, setOrderId] = useState(null)
  const {clearCart} = useCartContext()

  const handleOrderComplete = (id) => {
    setOrderId(id)
    setShowModal(true)
    clearCart()
  }

  const handleCloseModal = () => setShowModal(false)

  return (
    <Row>
      <Col md={6}>
        <h2 className="titulo">Resumen de Compra</h2>
        <CheckoutData />
      </Col>
      <Col md={6}>
        <h2 className="titulo">Datos para la compra</h2>
        <FormCheckout onOrderComplete={handleOrderComplete} />
      </Col>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Finalizaste tu compra!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Tu compra ha sido exitosa</p>
          <p>Orden ID: {orderId}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Row>
  )
}

export default MainComponent
