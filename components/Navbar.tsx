import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { IconType } from 'react-icons'
import { FaSearch, FaUser, FaHeart, FaShoppingCart, FaBars } from 'react-icons/fa';

interface NavLinks {
  id:number
  icon: IconType;
  link: string;
}

export default function Navbar() {

    const navbar = useRef<HTMLDivElement>(null);
    const title = useRef<HTMLSpanElement>(null);
    const v = useRef<HTMLSpanElement>(null);
    const navbarTitle = useRef<HTMLAnchorElement>(null);

    const handleScroll = () => {

      const navCur = navbar.current;
      const titleCur = title.current;
      const vCur = v.current;
      const navTitleCur = navbarTitle.current;

      if (document.documentElement.scrollTop || document.body.scrollTop > window.innerHeight){
        (null !== navCur) && navCur.classList.add('navbar-nav-scroll');
        (null !== titleCur) && titleCur.classList.add('navbar-title-scroll');
        (null !== vCur) && vCur.classList.add('navbar-v-scroll');
        (null !== navTitleCur) && navTitleCur.classList.add('navbar-parent-scroll');
      } else {
        (null !== navCur) && navCur.classList.remove('navbar-nav-scroll');
        (null !== titleCur) && titleCur.classList.remove('navbar-title-scroll');
        (null !== vCur) && vCur.classList.remove('navbar-v-scroll');
        (null !== navTitleCur) && navTitleCur.classList.remove('navbar-parent-scroll');

      }
    }

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


    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      }
    }, [])

    return (
      <div className="navbar" ref={navbar}>
          <div className="navbar__burgermenu">
            <span className="navbar__icons"><FaBars/></span>
          </div>
          <a href="" className="navbar__title" ref={navbarTitle}> <span className="navbar__title__red" ref={v}>V</span><span className="orshau" ref={title}>ORSHAU</span></a>
          <nav className="navbar__nav">
            <span className="navbar__icons"><FaSearch/></span>
            {navLinks.map((link:NavLinks) => (
              <Link key={link.id} href={link.link}><span className="navbar__icons"><link.icon/></span></Link>
            ))}
          </nav>
      </div>
    )
}