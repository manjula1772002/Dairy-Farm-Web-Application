"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
const Header = () => {
    const pathName = usePathname();
  return (
    <header className="bg-[#FDFBF7]">
      <nav className="flex justify-between items-center px-12 py-1">
        <div>
          {/* <img src="/logo.svg" width="90px" alt="logo" /> */}
          <h1 className="text-[#1B3022] font-bold text-2xl px-2 py-1 rounded">RK Dairy Farm</h1>
        </div>
        <div>
          <ul className="list-none flex space-x-8 text-[#1B3022] items-center font-medium">
            <li>
              <Link href="/" className={` font-bold hover:text-white hover:bg-[#E5B80B]  px-2 py-1 rounded ${pathName === "/" ? "active" : ""} `}>Home</Link>
            </li>
            <li >
              <Link href="/about" className={`font-bold hover:bg-[#E5B80B] hover:text-white px-2 py-1 rounded  ${pathName === "/about" ? "active" : ""} `}>About</Link>
            </li>
            <li>
              <Link href="/product" className={` ${pathName === "/product" ? "active" : ""} font-bold hover:bg-[#E5B80B] hover:text-white px-2 py-1 rounded `}>Product</Link>
            </li>
            <li>
              <Link href="/contact" className={` ${pathName === "/contact" ? "active" : ""} font-bold hover:bg-[#E5B80B] hover:text-white px-2 py-1 rounded `}>Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
