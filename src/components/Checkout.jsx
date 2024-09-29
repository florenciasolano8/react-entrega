import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import Row from 'react-bootstrap/Row'
import ListGroup from 'react-bootstrap/ListGroup'
import { useCartContext } from '../context/cartContext'

function FormCheckout() {
  const [validated, setValidated] = useState(false)

  const handleSubmit = (event) => {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }

    setValidated(true)
  }

  return (
    
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>First name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="First name"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Last name"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
          <Form.Label>Username</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
            <Form.Control
              type="email"
              placeholder="email"
              aria-describedby="inputGroupPrepend"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please choose a email.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>

      <Button type="submit">Finalizar Compra</Button>
    </Form>
  )
}

// DefaultExample Component
function CheckoutData() {
    const {cart} = useCartContext()

  return (
    <ListGroup>
        {cart.map(item => <ListGroup.Item key={item.id}>{item.name} x {item.quantity}u.</ListGroup.Item>)}
    </ListGroup>
  )
}

// Main Component to render both side by side
function MainComponent() {
  return (
    <Row>
      <Col md={6}>
        <h2>Resumen de Compra</h2>
        <CheckoutData /> 
      </Col>
      <Col md={6}>
        <h2>Datos para la compra</h2>
        <FormCheckout /> 
      </Col>
    </Row>
  )
}

export default MainComponent
