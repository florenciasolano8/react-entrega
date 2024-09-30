/* eslint-disable react/prop-types */
import Item from "../Item/Item"

function ItemList({ items }) {
  return (
    <>
      {items.map((item) => (
        <Item item={item} key={item.id} />
      ))}
    </>
  )
}
export default ItemList
