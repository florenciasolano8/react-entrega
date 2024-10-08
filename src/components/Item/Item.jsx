/* eslint-disable react/prop-types */
import "./item.css"
import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"
import Col from "react-bootstrap/Col"
import { Link } from "react-router-dom"

function Item({ item }) {
  return (
    <Col lg={3} className="p-3">
      <Card className="cards">
        <Card.Img variant="top" src={item.image} />
        <Card.Body>
          <Card.Title>{item.name}</Card.Title>
          <p>{item.category}</p>

          <Card.Text>{item.description}</Card.Text>
          
          <Button
            className="moreinfo"
            variant="danger"
            as={Link}
            to={`/product/${item.id}`}
          >
            more info
          </Button>
        </Card.Body>
      </Card>
    </Col>
  )
}
export default Item
