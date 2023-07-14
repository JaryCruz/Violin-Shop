import logoImg from '../assets/violin-logo.png'
import cartImg from '../assets/cart.svg'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import { useShoppingCart } from '../context/ShoppingCartContext'

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { openCart, cartQuantity } = useShoppingCart()

  return (
    <nav>
      <div className="container">
        <div className='nav-items'>
          <img src={logoImg} alt="" className='logo' />
          <button className={`btn-menu ${isMenuOpen ? 'open' : ''}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </button>
          <ul className={`${isMenuOpen ? 'open' : ''}`}>  
            <li>
              <NavLink to='/'>Home</NavLink>
            </li>
            <li>
              <NavLink to='/store'>Store</NavLink>
            </li>
            <li>
              <NavLink to='/about'>About</NavLink>
            </li>
          </ul>
        </div>

        {cartQuantity > 0 && (
          <button className='btn-cart' onClick={openCart}>
            <img src={cartImg} alt="" />
            <div>{cartQuantity}</div>
          </button>
        )}
      </div>
    </nav>
  )
}
