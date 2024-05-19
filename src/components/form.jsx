import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

function Forms() {
  const [formData, setFormData] = useState({
    movingFrom: "",
    movingTo: "",
    movingDate: "",
    rooms: "",
    firstName: "",
    lastName: "",
    phone: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    toast.success("Form Submitted Successfully");
    setFormData({
      movingFrom: "",
      movingTo: "",
      movingDate: "",
      rooms: "",
      firstName: "",
      lastName: "",
      phone: "",
    });
  };

  return (
    <div
      id="contact"
      className="flex relative items-center justify-center py-40 bg-orange-500 p-6"
    >
      <div className="flex flex-col md:flex-row bg-white rounded-lg max-w-4xl w-full">
        <div className="p-8 md:w-1/2 bg-orange-500 text-white flex flex-col justify-center">
          <h1 className="text-6xl font-bold mb-4">Get Your Free Quote</h1>
          <p className="text-lg">
            I'm a paragraph. Click here to add your own text and edit me. It's
            easy.
          </p>
        </div>
        <div className="p-8 md:w-1/2">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex space-x-4">
              <input
                type="text"
                name="movingFrom"
                placeholder="Moving From Zip Code"
                value={formData.movingFrom}
                onChange={handleChange}
                className="w-1/2 p-2 border border-gray-300 rounded"
                required
              />
              <input
                type="text"
                name="movingTo"
                placeholder="Moving to Zip Code"
                value={formData.movingTo}
                onChange={handleChange}
                className="w-1/2 p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div>
              <input
                type="date"
                name="movingDate"
                value={formData.movingDate}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div>
              <select
                name="rooms"
                value={formData.rooms}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
                required
              >
                <option value="">Number of Rooms</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
            </div>
            <div className="flex space-x-4">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                className="w-1/2 p-2 border border-gray-300 rounded"
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                className="w-1/2 p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div>
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-black text-white p-2 rounded"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <Toaster />
    </div>
  );
}

export default Forms;
