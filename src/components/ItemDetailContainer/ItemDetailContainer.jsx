import {useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'
import { getSingleProduct } from '../../firebase/db'

 function ItemDetailContainer(){
  const[detail, setDetail] = useState()

  const {id} = useParams()
  
  useEffect(()=>{

    getSingleProduct(id,setDetail)
  },[id])
  return (
    <ItemDetail detail={detail}/>
 
  )
  
}
export default ItemDetailContainer