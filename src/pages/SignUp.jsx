import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faGithub } from '@fortawesome/free-brands-svg-icons';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../auth/AuthProvider';
import { faTimes } from '@fortawesome/free-solid-svg-icons';


export default function Signup(props) {
  const { isOpen, onClose } = props;
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    role: 'client', // Default role is client
  });
  const navigate = useNavigate();
  const { login } = useAuth();

  if (!isOpen) return null; // Return nothing if modal is not open

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Mock logic for signup based on role (replace this with an API call)
    console.log('Form Data:', formData);

    if (formData.role === 'admin') {
      // Redirect Admin to Dashboard
      navigate('/admin/dashboard');
    } else {
      // Redirect Client to Home
      navigate('/');
    }
    login(formData.fullName, formData.role);
    setFormData({
      fullName: '',
      email: '',
      password: '',
      role: 'client',
   });

    // Close the modal
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-[900px] flex flex-col md:flex-row">
        {/* Left Side - Illustration */}
        <div className="md:w-1/2 w-full p-4">
          <img
            src="https://img.freepik.com/free-vector/hand-drawn-flat-design-ssl-illustration_23-2149261562.jpg?t=st=1732597435~exp=1732601035~hmac=656b20824527a20b36a16e51e259fdf689dd4e4604af698a69202249af20a1d2&w=740"
            alt="Signup Illustration"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Right Side - Form */}
        <div className="md:w-1/2 w-full p-4">
        <div className='text-right'>
            <button
              className=" text-gray-500 hover:text-gray-800 transition"
              onClick={onClose}
            >
            <FontAwesomeIcon icon={faTimes} className='text-2xl'/>
            </button>
          </div>
          <h2 className="text-2xl font-bold text-center mb-6">Create Account</h2>

          {/* Social Signup Buttons */}
          <div className="flex space-x-4 mb-6">
            <button className="flex items-center border justify-center w-full bg-transparent text-[#000000] p-2 rounded hover:bg-[#e5e6e4] transition duration-200">
              <FontAwesomeIcon icon={faGoogle} className="mr-2" />
              Signup with Google
            </button>
            <button className="flex items-center border justify-center w-full bg-transparent p-2 rounded hover:bg-[#e5e6e4] transition duration-200">
              <FontAwesomeIcon icon={faGithub} className="mr-2" />
              Signup with Github
            </button>
          </div>

          {/* Divider */}
          <div className="flex items-center my-4">
            <div className="w-full h-px bg-gray-300"></div>
            <span className="px-3 text-gray-500">OR</span>
            <div className="w-full h-px bg-gray-300"></div>
          </div>

          {/* Signup Form */}
          <form onSubmit={handleFormSubmit}>
            <div className="mb-4">
              <label htmlFor="fullName" className="block text-sm text-gray-600 mb-1">
                Full Name
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm text-gray-600 mb-1">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm text-gray-600 mb-1">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Role Selector */}
            <div className="mb-4">
              <label htmlFor="role" className="block text-sm text-gray-600 mb-1">
                Role
              </label>
              <select
                id="role"
                name="role"
                value={formData.role}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="client">Client</option>
                <option value="admin">Admin</option>
              </select>
            </div>

            {/* Submit Button */}
            <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
              Create Account
            </button>
          </form>

        </div>
      </div>
    </div>
  );
}
