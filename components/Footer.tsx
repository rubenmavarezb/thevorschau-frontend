import Link from 'next/link';


export default function Footer() {
    return (
      <footer>
        <Link href="/login">LOGIN</Link>
        <Link href="/new-account">New account</Link>
      </footer>
    )
}