import logo from '../../public/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faSquareThreads, faSquareInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-800 to-gray-700 text-gray-300 py-12 w-full">
      <div className="container mx-auto flex flex-wrap justify-between items-start space-y-8 lg:space-y-0 px-20">
        <div className="w-full lg:w-1/4">
          <div className="mb-4">
            <img src={logo} alt="Logo" className="w-1/2 h-3/4 object-cover" />
          </div>
          <p className="text-left">
            We would love to serve you <br></br>and let youenjoy your culinary experience.
          </p>
        </div>

        <div className="w-full lg:w-1/4">
          <h3 className="text-lg font-semibold mb-4">
            Office <span className="block w-10 h-1 bg-white"></span>
          </h3>
          <p>ITPL Road</p>
          <p>Whitefield, Bangalore</p>
          <p>Karnataka, PIN 560066, India</p>
          <p className="mt-4 cursor-pointer">johnDoe@outlook.com</p>
          <h4 className="mt-2 font-medium">+91-8457515112</h4>
        </div>
        <div className="w-full lg:w-1/4">
          <h3 className="text-lg font-semibold mb-4">
            Links <span className="block w-10 h-1 bg-white"></span>
          </h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Get Started
              </a>
            </li>
          </ul>
        </div>

        <div className="w-full lg:w-1/4">
          <h3 className="text-lg font-semibold mb-4">
            Newsletter <span className="block w-10 h-1 bg-white"></span>
          </h3>
          <form className="flex items-center space-x-2 border-b border-gray-500 pb-4 mb-6">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="bg-transparent outline-none text-sm text-gray-300 placeholder-gray-500 flex-grow"
            />
            <button type="submit" className="text-white hover:text-gray-300">
              <i className="fas fa-arrow-right"></i>
            </button>
          </form>
          <div className="flex space-x-4">
            <FontAwesomeIcon icon={faFacebookF}  className=" bg-white text-gray-800 p-2 rounded-full hover:bg-gray-300 cursor-pointer"/>
            <FontAwesomeIcon  icon={faSquareThreads} className=" bg-white text-gray-800 p-2 rounded-full hover:bg-gray-300 cursor-pointer" />
            <FontAwesomeIcon icon={faSquareInstagram} className=" bg-white text-gray-800 p-2 rounded-full hover:bg-gray-300 cursor-pointer" />
            <FontAwesomeIcon icon={faLinkedinIn} className="bg-white text-gray-800 p-2 rounded-full hover:bg-gray-300 cursor-pointer" />
          </div>
        </div>
      </div>
      <hr className="border-gray-600 my-8 w-4/5 mx-auto" />
      <p className="text-center text-sm">
        VRV Security © 2024 - All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;