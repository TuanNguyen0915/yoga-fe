import { useState } from "react"
import { close, logo, menu } from "../assets"
import { navLinks } from "../constants"

const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  return (
    <nav className="flexBetween navbar relative w-full py-6">
      <img src={logo} alt="yoga" className="h-[32px] w-[124px]" />
      <ul className="hidden flex-1 list-none items-center justify-end sm:flex">
        {navLinks.map((nav, idx) => (
          <li
            key={nav.id}
            className={`
            ${idx === navLinks.length - 1 ? "mr-0" : "mr-10"}
            cursor-pointer font-poppins text-[16px] font-normal`}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="h-[28px] w-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />
        <div
          className={`${toggle ? "flex" : "hidden"} bg-black-gradient sidebar absolute right-0 top-20 mx-4 my-2 min-w-[150px] rounded-xl p-6`}
        >
          <ul className="flexCol flex-1 list-none gap-6">
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`w-full cursor-pointer text-end font-poppins text-[16px] font-normal`}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
