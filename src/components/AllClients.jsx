import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';
const ClientTable = () => {

  const [clients, setClients] = useState([]);

  useEffect(() => {
    const storedClients = JSON.parse(localStorage.getItem('clients')) || [];
    setClients(storedClients);
  }, []);

  const deleteClient = (index) => {
    const updatedClients = clients.filter((_, i) => i !== index); 
    localStorage.setItem('clients', JSON.stringify(updatedClients)); 
    setClients(updatedClients);
  };


  return (
    <div className="p-4">
      <h1 className="text-xl font-semibold mb-4">All Clients</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200 rounded-lg">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 border">Select</th>
              <th className="px-4 py-2 border">Client Name</th>
              <th className="px-4 py-2 border">Mobile</th>
              <th className="px-4 py-2 border">Email</th>
              <th className="px-4 py-2 border">Company Name</th>
              <th className="px-4 py-2 border">Currency</th>
              <th className="px-4 py-2 border">Billing Method</th>
              <th className="px-4 py-2 border">Status</th>
              <th className="px-4 py-2 border">Address</th>
              <th className="px-4 py-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {clients.map((client, index) => (
              <tr key={index} className="text-sm">
                <td className="px-4 py-2 border">
                  <input type="checkbox" className="w-4 h-4" />
                </td>
                <td className="px-4 py-2 border text-white">{client.name}</td>
                <td className="px-4 py-2 border text-white">{client.mobile}</td>
                <td className="px-4 py-2 border text-white">{client.email}</td>
                <td className="px-4 py-2 border text-white">{client.companyName}</td>
                <td className="px-4 py-2 border text-white">{client.currency}</td>
                <td className="px-4 py-2 border text-white">{client.billingMethod}</td>
                <td className="px-4 py-2 border text-white">
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${
                      client.status === "Active"
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {client.status}
                  </span>
                </td>
                <td className="px-4 py-2 border text-white">{client.address}</td>
                <td className="px-4 py-2 border space-x-2">
                  <button className="text-blue-500 hover:underline"><FontAwesomeIcon icon={faPenToSquare} /></button>
                  <button className="text-red-500 hover:underline" onClick={() => deleteClient(index)}><FontAwesomeIcon icon={faTrashCan} /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ClientTable;