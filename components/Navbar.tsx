import Link from 'next/link';
import { IconType } from 'react-icons'
import { FaSearch, FaUser, FaHeart, FaShoppingCart } from 'react-icons/fa';

interface NavLinks {
  id:number
  icon: IconType;
  link: string;
}

export default function Navbar() {

    const navLinks: NavLinks[] = [
      {
        id: 1,
        icon: FaUser,
        link: '/login'
      },
      {
        id: 2,
        icon: FaHeart,
        link: '/favorites'
      },
      {
        id: 3,
        icon: FaShoppingCart,
        link: '/cart'
      },
    ]

    return (
      <div className="navbar">
          <div className="navbar__burgermenu">
            <i className="fas fa-bars"></i>
          </div>
          <a href="" className="navbar__title"> <span className="navbar__title__red">V</span>ORSHAU</a>
          <nav className="navbar__nav">
            <span className="navbar__icons"><FaSearch/></span>
            {navLinks.map((link:NavLinks) => (
              <Link key={link.id} href={link.link}><span className="navbar__icons"><link.icon/></span></Link>
            ))}
          </nav>
      </div>
    )
}