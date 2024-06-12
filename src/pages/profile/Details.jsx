import React, { useState } from 'react';
import ProfileImage from '../../assets/dummy_pic2.jpg'; // Adjust the path as necessary

export default function Details() {
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    dob: '',
    email: '',
    city: '',
    gender: ''
  });

  const [profileData, setProfileData] = useState({
    name: 'NAME',
    city: 'CITY'
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setProfileData({
      name: formData.name || 'NAME',
      city: formData.city || 'CITY'
    });
    setFormData({
      name: '',
      phoneNumber: '',
      dob: '',
      email: '',
      city: '',
      gender: ''
    });
  };

  return (
    <>
      <style>
        {`
          body {
            background-color: white;
          }
          .transparent-container {
            background-color: transparent;
            border: none;
            box-shadow: none;
          }
        `}
      </style>

      <div className="flex justify-center items-center min-h-screen transparent-container -mt-20">
        <div className="ml-32 flex">
          <div className="w-1/3 p-4 rounded shadow flex-shrink-0">
            <img src={ProfileImage} alt="Profile" className="w-full rounded" />
            <div className="text-center mt-4">
              <p className="font-bold">{profileData.name}</p>
              <p>{profileData.city}</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl ml-6">
            <form className="grid grid-cols-2 gap-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-gray-700">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full mt-2 p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label className="block text-gray-700">Phone Number</label>
                <input
                  type="text"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="w-full mt-2 p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label className="block text-gray-700">Date of Birth</label>
                <input
                  type="date"
                  name="dob"
                  value={formData.dob}
                  onChange={handleChange}
                  className="w-full mt-2 p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full mt-2 p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label className="block text-gray-700">City</label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full mt-2 p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label className="block text-gray-700">Gender</label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className="w-full mt-2 p-2 border border-gray-300 rounded-md"
                >
                  <option value="Gender">Your Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
              <div className="col-span-2 flex justify-start">
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                  SAVE
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
