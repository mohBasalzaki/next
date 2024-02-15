import Link from "next/link"

export default function Navbar() {
  return (
    <header>
      <nav className="p-5">
        <ul className="nav flex flex-row justify-between">
          <li>
            <Link href="/" className="hover:text-primary-100 font-bold">الرئيسية</Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-primary-100 font-bold">من نحن</Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-primary-100 font-bold">اتصل بنا</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
