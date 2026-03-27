"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
const Header = () => {
    const pathName = usePathname();
  return (
    <header className="bg-white">
      <nav className="flex justify-between items-center px-12 py-1">
        <div>
          <img src="/logo.svg" width="90px" alt="logo" />
        </div>
        <div>
          <ul className="list-none flex space-x-8 text-green-800 items-center font-medium">
            <li >
              <Link href="/" className={` ${pathName === "/" ? "active" : ""} font-semibold hover:bg-green-800 hover:text-white px-2 py-1 rounded `}>Home</Link>
            </li>
            <li >
              <Link href="/about" className={` ${pathName === "/about" ? "active" : ""} font-semibold hover:bg-green-800 hover:text-white px-2 py-1 rounded `}>About</Link>
            </li>
            <li>
              <Link href="/product" className={` ${pathName === "/product" ? "active" : ""} font-semibold hover:bg-green-800 hover:text-white px-2 py-1 rounded `}>Product</Link>
            </li>
            <li>
              <Link href="/contact" className={` ${pathName === "/contact" ? "active" : ""} font-semibold hover:bg-green-800 hover:text-white px-2 py-1 rounded `}>Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
