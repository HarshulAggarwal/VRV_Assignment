import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faGithub } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';


export default function Login(props) {
    const { isOpen, onClose } = props
     if (!isOpen) return null;
     

    

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
    <div className="flex bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="w-1/2 p-6">
        <div className="flex items-center justify-center h-full">
          <div>
            <img src="https://img.freepik.com/premium-vector/adventure-tour-theme-climbing-vacation-with-forest-mountain-views-illustration_2175-3840.jpg?w=740" alt="Illustration" />
          </div>
        </div>
      </div>

      <div className="w-1/2 p-8">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-semibold text-gray-700">Trippy</h2>
          <p className="text-lg text-gray-600 mt-8">Welcome to Trippy</p>
        </div>

        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor="username">
              Username
            </label>
            <input
              className="w-full px-3 py-2 border rounded-lg"
              type="text"
              id="username"
              placeholder="David Brooks"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor="password">
              Password
            </label>
            <input
              className="w-full px-3 py-2 border rounded-lg"
              type="password"
              id="password"
              placeholder="********"
              required
            />
          </div>

          <div className="mb-4 flex items-center justify-between">
            <a href="#" className="text-sm text-gray-600 hover:underline">Forgot password?</a>
          </div>

          <div className="mb-4">
            <button type="submit" className="w-full bg-gray-800 text-white py-2 rounded-lg">
              Sign in
            </button>
          </div>

          <div className="flex items-center justify-center">
            <button className="flex items-center justify-center w-full py-2 text-gray-700 border rounded-lg">
              <FontAwesomeIcon icon={faGoogle}  className="w-6 h-4 mr-2"/>
              Sign in with Google
            </button>
          </div>

          <div className="mt-4 text-center">
            <Link to="/signup" className="text-sm text-gray-600 hover:underline">New to Trippy? Create Account</Link>
          </div>
        </form>
      </div>
    </div>
  </div>
  );
}
