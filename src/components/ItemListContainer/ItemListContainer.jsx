import { useEffect,useState } from "react"
import ItemList from '../ItemList/ItemList'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

function ItemListContainer(){

   const [items,setItems] = useState([])
   useEffect(()=>{
    fetch('https://66d63577f5859a704268a79b.mockapi.io/products')
    .then(res => res.json())
    .then(res => setItems(res))
   },[])
  
   return(
    <Container className='p-3'>
      <Row>
        <ItemList items={items} />
      </Row>
    </Container>   
   )
}
export default ItemListContainer