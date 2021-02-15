import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser, faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import {FaFacebookF, FaInstagram, FaTwitter, FaPinterestP, FaPhone} from 'react-icons/fa';

interface FooterCategories {
  id: number;
  category: string;
  href: string;
}

export default function Footer() {

  const footerCategories: FooterCategories[] = [
    {
      id: 1,
      category: 'Men',
      href: '/login'
    },
    {
      id: 2,
      category: 'Women',
      href: '/login'
    },
    {
      id: 3,
      category: 'Shoes',
      href: '/login'
    },
    {
      id: 4,
      category: 'Denim',
      href: '/login'
    },
    {
      id: 5,
      category: 'Accesories',
      href: '/login'
    },
  ]


    return (
      <footer>
        <div className="footer__container">
          <div className="footer__container__items">
              <h2><span>V</span>ORSHAU</h2>
              <div className="items__contact">
                <Link href="/login"><FontAwesomeIcon className="icono" icon={faUser} size="2x"/></Link>
                <p>345 Main Road, Florida, United States</p>
              </div>
              <div className="items__contact">
                <Link href="/login"><FontAwesomeIcon className="icono" icon={faUser} size="2x"/></Link>
                <p>contact@vorshau.com</p>
              </div>
              <div className="items__contact">
                <Link href="/login"><FontAwesomeIcon className="icono" icon={faUser} size="2x"/></Link>
                <p>+001-2233-456</p>
              </div>
          </div>
          <div className="footer__container__items">
            <div className="items__categories">
              <h3>Categories</h3>
              <ul>
                {footerCategories.map((item: FooterCategories) => (
                  <li key={item.id}><Link href={item.href}>{item.category}</Link></li>
                ))}
              </ul>
            </div>
          </div>
          <div className="footer__container__items">
            <h3>Newsletter Signup</h3>
            <p>Subscribe to our newsletters now and stay up-to-date with new collections, the latest lookbooks and exclusive offers</p>
            <form>
            <input type="text" id="name" name="name" placeholder="Your email address"></input>
            <button className="btn btn__footer">Suscribete</button>
            </form>
          </div>
        </div>
        <div className="icon">
            <FaFacebookF className="icono"/> 
            <FaInstagram className="icono"/>
            <FaTwitter className="icono"/>
            <FaPinterestP className="icono"/>
        </div>
      </footer>
    )
}