import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Login from "../pages/SignUp"

export default function Navbar() {

  const [scrolling, setScrolling] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
    <nav className={`fixed w-full text-white top-0  z-10 ${
      scrolling ? 'bg-[#000814]' : 'bg-transparent'
    } transition-colors duration-300`}>
      <div className="container mx-auto px-4 py-3 flex items-center">
        <div>
          <h1 className="text-2xl font-bold">VRV Security</h1>
        </div>
        <div className="ml-[42%]">
          <ul className="flex space-x-14 text-white">
            <li className="hover:text-[#07beb8] cursor-pointer text-xl"><Link to="/"> Home</Link></li>
            <li className="hover:text-[#07beb8] cursor-pointer text-xl"><Link to="/"> About</Link></li>
            <li className="hover:text-[#07beb8] cursor-pointer text-xl"><Link to="/"> Services</Link></li>
            <button className="hover: cursor-pointer bg-[#07beb8] rounded-md px-2 py-1 text-md font-semibold" onClick={() => setIsModalOpen(true)} > Get Started</button>
          </ul>
        </div>
      </div>
    </nav>
      <Login isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
