/* eslint-disable react/prop-types */
import {useState} from 'react' 
import "./itemCount.css"


const ItemCount =({stock,initial,onAdd}) => {
    const [quantity,setQuantity] = useState(initial)

    const increment = ()=>{
        if(quantity < stock){
            setQuantity(quantity+1)
        }
    };
    
    const decrement = () =>{

        if(quantity > 1){
            setQuantity(quantity - 1)
        }
    };

    return(
        <div>
            <div className='contador'>
                <button className='botondecr' onClick={decrement}>-</button>
                <h4>{quantity}</h4>
                <button className='botonincr' onClick={increment}>+</button>
            </div>
        <div>
        <button className='agregaralcarro' onClick={() => onAdd(quantity)} disabled={!stock}>
        Agregar al carrito</button>
        </div>
        </div>
    )
}

export default ItemCount