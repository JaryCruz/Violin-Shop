import storeItems from '../data/items.json'
import { StoreItem } from '../components/StoreItem'

export function Store() {
  return (
    <div className='container'>
      <h1 className='store-title'>Instruments & Accessories</h1>
      <div className="store-container">
        {storeItems.map(item => (
          <StoreItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  )
}