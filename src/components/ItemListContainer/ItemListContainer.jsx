import { useEffect, useState } from "react"
import ItemList from "../ItemList/ItemList"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import { useParams } from "react-router-dom"
import { getProducts } from "../../firebase/db"

function ItemListContainer() {
  const [items, setItems] = useState([])
  const { id } = useParams()


  useEffect(() => {
    const filterProducts = async () => {
      const allProducts = await getProducts()
      if (id) {
        const filteredProducts = allProducts.filter(prod => {
          return prod.category && prod.category.trim().toLowerCase() === id.trim().toLowerCase();
        })
        setItems(filteredProducts);
      } else {
        setItems(allProducts)
      }
    }

    filterProducts();
  }, [id])

  return (
    <Container className="p-3">
      <Row>
        <ItemList items={items} />
      </Row>
    </Container>
  )
}
export default ItemListContainer
