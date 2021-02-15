import Link from 'next/link';
import {FaFacebookF, FaInstagram, FaTwitter, FaPinterestP, FaPhone} from 'react-icons/fa';
import { HiMail } from "react-icons/hi";
import { MdLocationOn } from "react-icons/md";

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
      <footer className="footer">
        <div className="footer__container">
          <div className="footer__container__items">
              <h2><span className="v">V</span>ORSCHAU</h2>
              <div className="footer__container__items--contact">
                <MdLocationOn className="footer__container__items--contact-icon footer__icon"/>
                <address>345 Main Road, Florida,<br /> United States</address>
              </div>
              <div className="footer__container__items--contact">
                <HiMail className="footer__container__items--contact-icon footer__icon" />
                <a href="mailto:thevorschau@gmail.com">thevorschau@gmail.com</a>
              </div>
              <div className="footer__container__items--contact">
                <FaPhone className="footer__container__items--contact-icon footer__icon" />
                <a href="tel:+">001-2233-456</a>
              </div>
          </div>
          <div className="footer__container__items">
            <div className="footer__container__items--categories">
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
            <p className="footer__container__items--text-form">Subscribe to our newsletters now and stay up-to-date with new collections, the latest lookbooks and exclusive offers</p>
            <form>
              <input type="text" id="name" name="name" placeholder="Your email address"></input>
              <button className="btn btn__footer">Suscribete</button>
            </form>
          </div>
        </div>
        <div className="footer__icons">
            <FaFacebookF className="footer__icons--icon footer__icon"/> 
            <FaInstagram className="footer__icons--icon footer__icon"/>
            <FaTwitter className="footer__icons--icon footer__icon"/>
            <FaPinterestP className="footer__icons--icon footer__icon"/>
        </div>
      </footer>
    )
}