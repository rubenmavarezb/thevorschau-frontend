import Link from 'next/link';


export default function Navbar() {
    return (
      <nav>
        <Link href="/login">LOGIN</Link>
        <Link href="/new-account">New account</Link>
      </nav>
    )
}