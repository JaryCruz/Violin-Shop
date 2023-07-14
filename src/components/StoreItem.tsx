import { useShoppingCart } from "../context/ShoppingCartContext"
import { formatCurrency } from "../utilities/formatCurrency"

type StoreItemProps = {
  id: number
  name: string
  price: number
  imgUrl: string
}

export function StoreItem({ id, name, price, imgUrl }: StoreItemProps) {
  const { 
    getItemQuantity, 
    increaseCartQuantity,  
    decreaseCartQuantity,
    removeFromCart
  } = useShoppingCart()
  const quantity = getItemQuantity(id)

  return (
    <div className="store-item">
      <img src={imgUrl} alt="" />
      <div className="card-body">
        <div className="card-title">
          <span>{name}</span>
          <span>{formatCurrency(price)}</span>
        </div>  
        <div className="card-actions">
          {quantity === 0 ? (
            <button className="btn-add-to-cart" onClick={() => increaseCartQuantity(id)}>
              + Add To Cart
            </button>
          ) : (
            <div className="product-settings">
              <div>
                <button onClick={() => decreaseCartQuantity(id)}>-</button>
                <span>{quantity} In Cart</span>
                <button onClick={() => increaseCartQuantity(id)}>+</button>
              </div>
              <button className="btn-remove" onClick={() => removeFromCart(id)}>Remove</button>
            </div>
          )}
        </div>
      </div>

    </div>
  )
}
