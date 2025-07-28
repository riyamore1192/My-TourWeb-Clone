
import Navbar from '../componants/Navbar/Navbar';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginSuccess, loginFailure } from '../componants/Action/Action';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Simple form validation (you can extend this)
    if (email && password) {
      const user = { email, password }; // Example user object
      dispatch(loginSuccess(user));
      // Dispatch success action
      navigate('/booking'); // Redirect to booking page
    } else {
      dispatch(loginFailure()); // Dispatch failure action
      alert('Invalid credentials');
    }
  };

   // Hook to navigate programmatically

  const handleBookingClick = () => {
    navigate('/booking'); // Navigate to the login page
  };

  const login = () => {
    return (
      alert("Thank you , You have login successfully !!") ,
      alert("click on book now to book ur tour !!") 
    )
  }

  return (
    <>
      <Navbar />
      <div className="min-h-[67vh] w-full relative  bg-blue-200">
        <p id="heading" className="font-serif font-bold text-5xl  text-emerald-950">
          Login here to book ur favourit place
        </p>
        <div id="login" className='h-[50vh] w-[50vw] rounded-3xl justify-around items-center absolute flex flex-col bg-gray-50'>

          <form className="form" onSubmit={handleLogin}>
            <div>
              <label className="font-serif text-3xl text-indigo-800">Email:</label>
              <input
                className="font-serif text-2xl  min-h-[7vh] text-amber-950 rounded-2xl border-2"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="font-serif text-3xl text-indigo-800">Password:</label>
              <input
                className="font-serif text-2xl min-h-[7vh] text-amber-950 rounded-2xl border-2"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
      
            <button id='logbutton' onClick={() => login()}
            className="text-xl font-serif font-bold rounded-full bg-amber-600 "
              type="submit">Login</button>
            <button to="/booking" onClick={() => handleBookingClick()}  id='logbutton'
            className="text-xl font-serif font-bold rounded-full bg-pink-600">Book now</button>
          </form>
          {/* <button to="/booking">Book here</button> */}
        </div>
      </div>


    </>
  );
};

export default Login;