import Link from 'next/link';


export default function Footer() {
    return (
      <footer>
        <Link href="/login">LOGIN de footer</Link>
        <Link href="/new-account">New account footer</Link>
      </footer>
    )
}