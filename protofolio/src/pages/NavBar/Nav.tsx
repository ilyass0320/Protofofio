import { Link } from "react-router-dom";

const Nav = () => {
return (
     <nav className="border-b border-amber-200 px-6 py-4">
        <ul className="flex flex-wrap gap-6">
          <li className="hovLink">
            <Link to="/" className=" border border-transparent px-3 py-2 text-lg font-extrabold text-[#cc9109] ">Portfolio</Link>
          </li>
          <li className="hovLink">
            <Link to="/about" className="">About</Link>
          </li>
          <li className="hovLink">
            <Link to="/projects" className="">Projects</Link>
          </li>
          <li className="hovLink">
            <Link to="/contact" className="">Contact</Link>
          </li>
        </ul>
      </nav>
)
}

export default Nav;
