import { useEffect,useState } from "react"
import ItemList from '../ItemList/ItemList'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import { useParams } from "react-router-dom"
import { getProducts } from "../../firebase/db"

function ItemListContainer(){

   const [items,setItems] = useState([])
   const {id} = useParams()

    useEffect(()=>{
      
    getProducts(setItems)
   },[id])
   
  
   return(
    <Container className='p-3'>
      <Row>
        <ItemList items={items} />
      </Row>
      
    </Container>   
   )
}
export default ItemListContainer