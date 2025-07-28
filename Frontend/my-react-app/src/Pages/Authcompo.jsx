import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import bookimg from "../assets/bookig.jpg"
import Navbar from '../componants/Navbar/Navbar';
import "../App.css"
import { useNavigate } from 'react-router-dom';
import { logout } from '../componants/Action/Action';

const Booking = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((state) => state.auth.user);

  const handleLogout = () => {
    dispatch(logout()); // Dispatch the logout action
    navigate('/login'); // Redirect to the login page after logout
  };

  const handleLoginClick = () => {
    navigate('/login');
  };


  const handleBooking = async (e) => {
    e.preventDefault();
    // alert(`Booking Details:  \nName: ${formData.name}\nDestination: ${formData.Destination}\nDate: ${formData.date}\nPeople: ${formData.guests}\nTime: ${formData.time}`);
    // navigate('/logout')
    try {
      const response = await fetch("http://localhost:5000/booking", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        const errorText = await response.text(); // ✅ read plain text
        throw new Error(`Server error: ${errorText}`);
      }

      const result = await response.json();
      alert('Booking successful!');
      console.log('Server response:', result);
      setFormData({
        name: '',
        destination: '',
        date: '',
        time: '',
        guest_num: '',
      });
      // alert(result.message)
    }
    catch (error) {
      console.error('Error in adding data to backend:', error);
    }
  };

  const [formData, setFormData] = useState({
    name: '',
    destination: '', // ✅ lowercase to match backend
    date: '',
    time: '',
    guest_num: '', // or `guests` if you adjust the backend
    // user_id: '' // must include this if required by DB
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    // console.log('Input Value:', value);  
    setFormData({
      ...formData,
      [name]: value,
    });
    // console.log(formData)
  };


  if (!user) {
    return <>
      <Navbar />
      <div id='auth' className='min-h-[30vh] bg-gray-400 flex flex-col items-center gap-6'>
        <h2 className="font-serif font-bold text-3xl absolute text-blue-950">Please login to make a booking</h2>;
        <button id='loginbutton' to="/login" onClick={() => handleLoginClick()}
          className="text-xl font-serif font-bold rounded-full bg-amber-600 "
          type="submit">Login</button>
      </div>
    </>
  }

  return (
    <div className='flex flex-col '>
      <Navbar />

      <div className="w-full min-h-[114vh] relative  bg-cover bg-center"
        style={{ backgroundImage: `url(${bookimg})` }}></div>
      {/* <div id='inner' className=" inset-3   absolute bg-gray-300"> */}

      <div id='inside' className="bg-white absolute inset-y-30 inset-x-35 h-fit flex flex-col gap-2 border-amber-950 p-6 rounded-lg shadow-lg ">
        <h2 id='h2' className="font-serif font-bold text-4xl text-blue-950">Book Your Tour, {user.email}</h2>
        <form className='flex flex-col gap-4' onSubmit={(e) => handleBooking(e)}>
          {/* <div className='flex flex-row gap-6'> */}
          <div>
            <label className="font-serif text-3xl text-blue-950">
              Name
            </label><input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className=" w-full font-serif text-2xl border-2 border-gray-500
               rounded-md focus:outline-none focus:ring-2 min-h-[4vh] focus:ring-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block font-serif text-3xl  text-blue-950">
              Destination
            </label>
            <input
              type="text"
              name="destination"
              value={formData.destination}
              onChange={handleChange}
              className=" w-full font-serif text-2xl min-h-[4vh] border-2 border-gray-500
               rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />

          </div>

          <div className="mb-4">
            <label className="block font-serif text-3xl  text-blue-950">
              Date
            </label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full border-2 border-gray-500 min-h-[6vh] rounded-md focus:outline-none
               focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block font-serif text-3xl  text-blue-950">
              Time
            </label>
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              className="w-full  border-2 border-gray-500 min-h-[6vh] 
              rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block font-serif text-3xl  text-blue-950">
              Number of Guests
            </label>
            <input
              type="number"
              name="guest_num"
              value={formData.guest_num}
              onChange={handleChange}
              min="1"
              max="10"
              className="w-full  border-2 border-gray-500 min-h-[6vh]
               rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className='flex flex-row gap-3'>
            <button onClick={(e) => handleBooking(e)}
              id='authbutton'
              type="submit"
              className="w-fit  bg-blue-500 text-white py-3 rounded-md text-lg font-semibold hover:bg-blue-600 transition duration-200"
            >
              Book Now
            </button>
            <button id='authbutton'
              onClick={() => handleLogout()} className="w-fit bg-red-500 text-white rounded-md text-lg font-semibold hover:bg-red-600 transition duration-200 mt-4">
              Logout
            </button>
          </div>
        </form>
        {/* </div> */}
      </div>
    </div>
  );
};

export default Booking;