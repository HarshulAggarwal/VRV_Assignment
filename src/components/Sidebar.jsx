import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleDown, faUser, faHouse, faBook, faNewspaper} from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";
export default function Sidebar({ onItemClick }){

  const [isClientsOpen, setIsClientsOpen] = useState(false);
  const [isReportsOpen, setIsReportsOpen] = useState(false);

  const toggleEmployeesMenu = () => {
    setIsClientsOpen(!isClientsOpen); 
  };

  const toggleReportsMenu = () => {
    setIsReportsOpen(!isReportsOpen); 
  };
  return (
    <div className="bg-gray-800 text-white h-auto w-64">
      <ul className="space-y-6 mt-20">
        <li className="px-4 py-2 hover:bg-gray-700" onClick={() => onItemClick("dashboard")}><FontAwesomeIcon icon={faHouse} className='mr-2'/>Dashboard</li>
        <li className="px-4 py-2 hover:bg-gray-700"><FontAwesomeIcon icon={faBook} className='mr-2' />Projects</li>
        <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer flex items-center space-x-3" onClick={toggleEmployeesMenu}>
         <FontAwesomeIcon icon={faUser } className='mr-2' /> Clients<FontAwesomeIcon icon={isClientsOpen ? faAngleDown : faAngleRight} />
        </li>
        {isClientsOpen && (
          <ul className="ml-5 space-y-2">
            <li className="px-4 py-2 hover:bg-gray-600 cursor-pointer" onClick={() => onItemClick("addClient")}>
              Add  Client
            </li>
            <li className="px-4 py-2 hover:bg-gray-600 cursor-pointer" onClick={() => onItemClick("allClients")}>
              All  Clients
            </li>
          </ul>
        )}
        <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer flex items-center space-x-3" onClick={toggleReportsMenu}> 
          <FontAwesomeIcon icon={faNewspaper} className='mr-2' />Reports <FontAwesomeIcon icon={isReportsOpen ? faAngleDown : faAngleRight} />
        </li>
        {isReportsOpen && (
          <ul className="ml-5 space-y-2">
            <li className="px-4 py-2 hover:bg-gray-600 cursor-pointer" onClick={() => onItemClick("addClient")}>
             Expense Report
            </li>
          </ul>
        )}
      </ul>
    </div>
  );
};

