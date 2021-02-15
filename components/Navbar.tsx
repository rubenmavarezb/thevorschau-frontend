import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser, faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-common-types'

interface NavLinks {
  id:number
  icon: IconDefinition;
  href: string;
}

export default function Navbar() {

    const navLinks: NavLinks[] = [
      {
        id: 1,
        icon: faUser,
        href: '/login'
      },
      {
        id: 2,
        icon: faHeart,
        href: '/login'
      },
      {
        id: 3,
        icon: faShoppingCart,
        href: '/login'
      },
    ]

    return (
      <div className="navbar">
          <div className="navbar__burgermenu">
            <i className="fas fa-bars"></i>
          </div>
          <a href="" className="navbar__title">VORSHAU</a>
          <nav className="navbar__nav">
            <FontAwesomeIcon icon={faSearch} size="2x"/>
            {navLinks.map((link:NavLinks) => (
              <Link key={link.id} href={link.href}><FontAwesomeIcon icon={link.icon} size="2x"/></Link>
            ))}
          </nav>
      </div>
    )
}