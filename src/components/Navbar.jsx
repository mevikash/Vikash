import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
// import { navLinks } from "../constants";
import { logo } from "../assets";
import { styles } from "../pages/styles";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [password, setPassword] = useState("");
  const correctPassword = "meVikash1998"; // Replace with your desired password

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (password === correctPassword) {
      window.location.href = "./Resume.pdf";
    } else {
      alert("Incorrect password. Please try again.");
    }
  };

  const cancelPasswordPrompt = () => {
    setToggle(false);
    setPassword("");
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`${
      styles.paddingX
    } w-full flex items-center py-5 fixed top-0 z-20 ${
      scrolled ? "bg-primary" : "bg-transparent"
    }`}>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>

      <NavLink
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
          >
          <img src={logo} alt='logo' className='w-15 h-14 object-contain' />
          <p className='text-white text-[18px] font-bold cursor-pointer flex '>
            Vikash&nbsp;
            <span className='sm:block hidden'> | Meghwal</span>
          </p>
        </NavLink>

      <nav className='flex text-lg gap-7 font-medium'>
        <NavLink to='/about' className={({ isActive }) => isActive ? "text-blue-600" : "text-white" }>
          About
        </NavLink>
        <NavLink to='/projects' className={({ isActive }) => isActive ? "text-blue-600" : "text-white"}>
          Projects
        </NavLink>
        <NavLink to='/contact' className={({ isActive }) => isActive ? "text-blue-600" : "text-white"}>
          Contact
        </NavLink>
        <div
            className={`${
              active === "Resume" ? "text-white" : "text-secondary"
            } hover:text-white text-[18px] font-medium cursor-pointer`}
            onClick={() => setActive("Resume")}
          >
            <a href="#" onClick={() => setToggle(true)}>Resume</a>
          </div>
      </nav>
      
          </div>
          {/* Password Prompt Modal */}
      {toggle && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-700 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg">
            <h2 className="text-lg font-semibold text-black p-1 rounded-md ">Enter Password</h2>
            <form onSubmit={handlePasswordSubmit}>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border p-3 rounded-md mb-2"
                placeholder="Password"
              />
              <div className="flex justify-between">
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">Submit</button>
                <button type="button" onClick={cancelPasswordPrompt} className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md ml-4">Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
