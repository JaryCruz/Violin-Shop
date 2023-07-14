import facebookIcon from '../assets/facebook-icon.svg'
import twitterIcon from '../assets/twitter-icon.svg'
import { NavLink } from 'react-router-dom'

export function Footer() {

  return (
    <footer>
      <div className="container">
        <div className="footer-nav">
          <p>ViolinShop &copy; 2023</p>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/store'>Store</NavLink>
          <NavLink to='/about'>About</NavLink>
        </div>
        <div>
          <img src={facebookIcon} alt="" />
          <img src={twitterIcon} alt="" />
        </div>
      </div>
    </footer>
  )
}
