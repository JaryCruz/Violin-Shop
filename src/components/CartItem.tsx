import { useShoppingCart } from "../context/ShoppingCartContext"
import storeItems from '../data/items.json'
import { formatCurrency } from "../utilities/formatCurrency"

type CartItemProps = {
  id: number
  quantity: number
}

export function CartItem({ id, quantity }: CartItemProps) {
  const { removeFromCart } = useShoppingCart()
  const item = storeItems.find(i => i.id === id)
  if (item == null) return null

  return (
    <div className="cart-item">
      <img src={item.imgUrl} alt="" />
      <div className="cart-item-info">
        <h3>{item.name}</h3>
        <span>x{quantity} = {formatCurrency(item.price * quantity)}</span>
        <button className="btn-remove" onClick={() => removeFromCart(item.id)}>Remove</button>
      </div>
    </div>
  )
}