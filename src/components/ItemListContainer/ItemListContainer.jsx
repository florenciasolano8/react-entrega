import { useEffect,useState } from "react"
import ItemList from '../ItemList/ItemList'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import { useParams } from "react-router-dom"

function ItemListContainer(){

   const [items,setItems] = useState([])
   const {id} = useParams()

    useEffect(()=>{
      const filterItems = (products) =>{
        const filterProducts = products.filter(p => p.category === id)
        setItems(filterProducts)
      }

    fetch('https://66d63577f5859a704268a79b.mockapi.io/products')
    .then(res => res.json())
    .then(res => {
      if(!id){
        setItems(res)
      }
      else{
        filterItems(res)
      }
    })
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