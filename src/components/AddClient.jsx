import { useState } from 'react';

export default function AddClient() {
  const [clientData, setClientData] = useState({
    name: '',
    email: '',
    companyName: '',
    mobile: '',
    address: '',
    currency: '',
    billingMethod: '',
    image: null,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setClientData({ ...clientData, [name]: value });
  };

  const handleFileChange = (e) => {
    setClientData({ ...clientData, image: e.target.files[0] });
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = {};

    if (!clientData.name.trim()) {
      newErrors.name = 'Name is required';
      valid = false;
    }

    if (!clientData.email.trim()) {
      newErrors.email = 'Email is required';
      valid = false;
    }

    if (!clientData.mobile.trim()) {
      newErrors.mobile = 'Mobile number is required';
      valid = false;
    }

    if (!clientData.currency) {
      newErrors.currency = 'Currency is required';
      valid = false;
    }

    if (!clientData.billingMethod) {
      newErrors.billingMethod = 'Billing Method is required';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      const existingClients = JSON.parse(localStorage.getItem('clients')) || [];
      const newClient = {
        ...clientData,
        status: 'Active',
      };
      localStorage.setItem('clients', JSON.stringify([...existingClients, newClient]));
      alert('Client added successfully!');
      setClientData({
        name: '',
        email: '',
        companyName: '',
        mobile: '',
        address: '',
        currency: '',
        billingMethod: '',
        image: null,
      });
      setErrors({});
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Add Client</h2>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-6">
          <div className="col-span-2">
            <label className="block text-sm font-medium">Name*</label>
            <input
              type="text"
              name="name"
              value={clientData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md"
              required
            />
            {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}
          </div>
          <div className="col-span-2 sm:col-span-1">
            <label className="block text-sm font-medium">Email*</label>
            <input
              type="email"
              name="email"
              value={clientData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md"
              required
            />
            {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
          </div>
          <div className="col-span-2 sm:col-span-1">
            <label className="block text-sm font-medium">Mobile*</label>
            <input
              type="text"
              name="mobile"
              value={clientData.mobile}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md"
              required
            />
            {errors.mobile && <p className="text-red-500 text-xs">{errors.mobile}</p>}
          </div>
          <div className="col-span-2 sm:col-span-1">
            <label className="block text-sm font-medium">Company Name*</label>
            <input
              type="text"
              name="companyName"
              value={clientData.companyName}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md"
              required
            />
            {errors.companyName && <p className="text-red-500 text-xs">{errors.companyName}</p>}
          </div>
          <div className="col-span-2 sm:col-span-1">
            <label className="block text-sm font-medium">Address*</label>
            <input
              type="text"
              name="address"
              value={clientData.address}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md"
              required
            />
            {errors.address && <p className="text-red-500 text-xs">{errors.address}</p>}
          </div>
          <div className="col-span-2 sm:col-span-1">
            <label className="block text-sm font-medium">Currency*</label>
            <select
              name="currency"
              value={clientData.currency}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md"
              required
            >
              <option value="">Select Currency</option>
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="INR">INR</option>
            </select>
            {errors.currency && <p className="text-red-500 text-xs">{errors.currency}</p>}
          </div>
          <div className="col-span-2 sm:col-span-1">
            <label className="block text-sm font-medium">Billing Method*</label>
            <select
              name="billingMethod"
              value={clientData.billingMethod}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md"
              required
            >
              <option value="">Select Billing Method</option>
              <option value="Hourly">Hourly</option>
              <option value="Project-based">Project-based</option>
            </select>
            {errors.billingMethod && <p className="text-red-500 text-xs">{errors.billingMethod}</p>}
          </div>
          <div className="col-span-2">
            <label className="block text-sm font-medium">Upload Image</label>
            <input
              type="file"
              onChange={handleFileChange}
              className="w-full px-4 py-2 border rounded-md"
            />
          </div>
        </div>
        <div className="mt-4 flex justify-between">
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white rounded-md"
          >
            Submit
          </button>
          <button
            type="button"
            className="px-6 py-2 bg-gray-300 text-gray-700 rounded-md"
            onClick={() =>
              setClientData({
                name: '',
                email: '',
                companyName: '',
                mobile: '',
                address: '',
                currency: '',
                billingMethod: '',
                image: null,
              })
            }
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
