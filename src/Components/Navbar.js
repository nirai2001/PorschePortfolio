import { NavLink } from "react-router-dom";

import { logo } from "../assets/images";

const Navbar = () => {
  return (
    <header className='header'>
      <NavLink to='/' className="w-10 h-10 rounded-lg bg-white items-center justify-center
      flex font-bold">
        <p className="blue-gradient_text">NP</p>
      </NavLink>
      <nav className='flex text-lg gap-7 font-medium'>
        <NavLink to='/about' className= "text-white" >
          About
        </NavLink>
        <NavLink to='/projects' className= "text-white" >
          Projects
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;