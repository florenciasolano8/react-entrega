/* eslint-disable react/prop-types */
import ItemCount from "../ItemCount/ItemCount"

function ItemDetail({ detail }) {
  return (
    <div>
      <p>{detail?.name}</p>
      <p>{detail?.price}</p>
      <p>{detail?.description}</p>
      <ItemCount prod={detail} />
    </div>
  )
}

export default ItemDetail
