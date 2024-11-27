import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWifi } from '@fortawesome/free-solid-svg-icons';
import { faGlobe, faFingerprint, faShieldHalved, faChevronRight, faDesktop, faBan, faUnlockKeyhole } from '@fortawesome/free-solid-svg-icons';
import home from '../../public/home.jpg'

export default function Home() {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowText(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className=''>
      <div className="relative h-screen">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <video className="w-full h-full object-cover" autoPlay loop muted>
            <source src="/video.mp4" type="video/mp4" />
          </video>
        </div>
        <div
          className={`absolute inset-0 flex flex-col justify-center items-center text-white bg-black bg-opacity-40 
        ${showText ? 'opacity-100 translate-y-0 transition-all duration-1000' : 'opacity-0 translate-y-20'}`}
        >
          <h1 className="text-5xl font-bold mb-4">Welcome to VRV Security</h1>
          <p className="text-xl text-center max-w-xl">
            We provide world-class security solutions to safeguard your life and property. Join us to experience unparalleled protection.
          </p>
          <button className="mt-6 px-6 py-3 bg-[#07beb8] border-cyan-300 rounded text-white font-semibold hover:bg-transparent transition  hover:border-cyan-300">
            Learn More
          </button>
        </div>


      </div>
      <div className='bg-[#000814] pb-7'>

        <div className="">
          <div
            className={`flex  -mt-20 items-center text-white text-center bg-[#1a1a1a] bg-opacity-90  border rounded  mx-24 px-10 py-10 
          ${showText ? 'opacity-100 translate-y-0 transition-all duration-1000 delay-500' : 'opacity-0 translate-y-10'}`}

          >
            <h2 className="text-2xl font-semibold mb-4 mr-10">
              Choose the right <br></br> protection for you.
            </h2>
            <div className="flex space-x-16 ml-14 ">

              <div className="flex flex-col items-center">
                <FontAwesomeIcon icon={faWifi} className="text-3xl mb-2 text-[#07beb8]" />
                <p className='text-xl'>Real-Time <br></br> Protection</p>
              </div>

              <div className="flex flex-col items-center">
                <FontAwesomeIcon icon={faGlobe} className="text-3xl mb-2 text-[#07beb8]" />
                <p className='text-xl'>Protect your <br></br> privacy</p>
              </div>

              <div className="flex flex-col items-center">
                <FontAwesomeIcon icon={faFingerprint} className="text-3xl mb-2 text-[#07beb8]" />
                <p className='text-xl'>Secure Your <br></br> Identity</p>
              </div>
              <div className="flex flex-col items-center">
                <FontAwesomeIcon icon={faShieldHalved} className="text-3xl mb-2 text-[#07beb8]" />
                <p className='text-xl'>Advanced <br></br> Security</p>
              </div>
              <div className="flex flex-col items-center">
                <FontAwesomeIcon icon={faShieldHalved} className="text-3xl mb-2 text-[#07beb8]" />
                <p className='text-xl'>Advanced <br></br> Security</p>
              </div>
            </div>
          </div>
          <div className='mt-12 px-24 flex justify-center'>
            <div>
              <img src={home} className='w-11/12 h-3/4 rounded-xl'></img>
            </div>
            <div className='mt-10 items-center'>
              <div>
                <button className='bg-[#05827d] text-white px-3 py-1 font-semibold text-md rounded-xl '>About our Company</button>
                <h1 className='text-white font-semibold text-4xl rounded-sm mt-3 font-lato tracking-wider'>No matter where you go. Be <br></br>security smart.</h1>
              </div>
              <div>
                <p className='text-white mt-7 leading-6  font-poppins tracking-wide'>A cybersecurity company specializes in safeguarding digital assets, networks, and systems against cyber threats. They provide advanced solutions such as threat detection, vulnerability assessments, data encryption, and incident response. By leveraging cutting-edge technology and expert strategies, these companies ensure businesses and individuals stay protected in an increasingly interconnected and vulnerable digital world.</p>
                <button className='bg-[#05827d] text-white px-3 py-2 rounded-lg mt-5 font-medium'>
                  Dicover More <FontAwesomeIcon icon={faChevronRight} />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className=''>
          <div className='text-center'>
            <button className='bg-[#05827d] text-white  px-3 py-1 font-semibold text-md rounded-xl '>Pricing Plan</button>
            <p className='text-white text-4xl mt-2 font-bold'>Choose Your Subscription Plan</p>
          </div>
          <div>
            <p className='text-white text-center mt-3'>Our service allows you to hide your geolocation, bypass blocking and protect your data. Join over 150 <br></br>thousand people who trust VRV to keep their life safe.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-12 mt-10">
            <div className="bg-[#ced4da] rounded-lg  p-6 text-center w-[300px] border shadow-lg transition-shadow duration-300 ease-in-out hover:shadow-[0_8px_30px_rgba(0,0,0,0.3)] hover:scale-105">
              <p className="text-lg font-bold">1 month</p>
              <h2 className="text-4xl font-bold mt-3">
                $3.50 <span className="text-base font-normal">/ month</span>
              </h2>
              <p className="text-red-500 font-semibold mt-2">save 0%</p>
              <hr className="my-4" />
              <ul className="text-gray-800 text-sm space-y-2 text-left">
                <li><FontAwesomeIcon icon={faDesktop} className='mr-1' /> 1 device using</li>
                <li><FontAwesomeIcon icon={faShieldHalved} className='mr-1' /> Anti-virus protection service</li>
                <li><FontAwesomeIcon icon={faUnlockKeyhole} className='mr-1' /> Reliable personal data protection</li>
                <li><FontAwesomeIcon icon={faBan} className='mr-1' /> Advertisements blocking</li>
              </ul>
              <button className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white px-5 py-2 rounded-full mt-6 font-semibold">
                Subscribe Now →
              </button>
            </div>

            <div className="bg-[#ced4da] rounded-lg p-6 text-center w-[300px] transition-transform transition-shadow duration-300 ease-in-out hover:shadow-[0_8px_30px_rgba(0,0,0,0.3)] hover:scale-105">
              <p className="text-lg font-bold">6 months</p>
              <h2 className="text-4xl font-bold mt-3">
                $15.49 <span className="text-base font-normal">/ month</span>
              </h2>
              <p className="text-green-500 font-semibold mt-2 t">save 25%</p>
              <hr className="my-4" />
              <ul className="text-gray-800 text-sm space-y-2 text-left">
                <li><FontAwesomeIcon icon={faDesktop} className='mr-1' /> 1 device using</li>
                <li><FontAwesomeIcon icon={faShieldHalved} className='mr-1' /> Anti-virus protection service</li>
                <li><FontAwesomeIcon icon={faUnlockKeyhole} className='mr-1' /> Reliable personal data protection</li>
                <li><FontAwesomeIcon icon={faBan} className='mr-1' /> Advertisements blocking</li>
              </ul>
              <button className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white px-5 py-2 rounded-full mt-6 font-semibold">
                Subscribe Now →
              </button>
              <p className="text-gray-600 mt-3 text-xs">30-day money-back guarantee</p>
            </div>

            <div className="bg-[#ced4da] rounded-lg shadow-lg p-6 text-center w-[300px] transition-shadow duration-300 ease-in-out hover:shadow-[0_8px_30px_rgba(0,0,0,0.3)] hover:scale-105">
              <p className="text-lg font-bold">12 months</p>
              <h2 className="text-4xl font-bold mt-3">
                $24.99 <span className="text-base font-normal">/ month</span>
              </h2>
              <p className="text-orange-500 font-semibold mt-2">save 45%</p>
              <hr className="my-4" />
              <ul className="text-gray-800 text-sm space-y-2 text-left">
                <li><FontAwesomeIcon icon={faDesktop} className='mr-1' /> 1 device using</li>
                <li><FontAwesomeIcon icon={faShieldHalved} className='mr-1' /> Anti-virus protection service</li>
                <li><FontAwesomeIcon icon={faUnlockKeyhole} className='mr-1' /> Reliable personal data protection</li>
                <li><FontAwesomeIcon icon={faBan} className='mr-1' /> Advertisements blocking</li>
              </ul>
              <button className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white px-5 py-2 rounded-full mt-6 font-semibold">
                Subscribe Now →
              </button>
              <p className="text-gray-600 mt-3 text-xs">30-day money-back guarantee</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
