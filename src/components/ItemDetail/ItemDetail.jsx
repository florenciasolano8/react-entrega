/* eslint-disable react/prop-types */
import ItemCount from "../ItemCount/ItemCount"
import "./itemDetail.css"


function ItemDetail({ detail }) {
  return (
    <div className="detalles-producto">
      <p>{detail?.description}</p>
      <p>${detail?.price}</p>
      <ItemCount prod={detail} />
    </div>
  )
}

export default ItemDetail
