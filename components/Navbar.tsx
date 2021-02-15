import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser, faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
    return (
      <div className="navbar">
          <div className="burgermenu">
            <i className="fas fa-bars"></i>
          </div>
          <a href="">VORSHAU</a>
          <nav>
            <FontAwesomeIcon icon={faSearch} size="2x"/>
            <Link href="/login"><FontAwesomeIcon icon={faUser} size="2x"/></Link>
            <Link href="/login"><FontAwesomeIcon icon={faHeart} size="2x"/></Link>
            <Link href="/login"><FontAwesomeIcon icon={faShoppingCart} size="2x"/></Link>
          </nav>
      </div>
    )
}