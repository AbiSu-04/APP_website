import React from 'react';
// import './BookingConfirmation.css'; // Optional: Include your CSS file for styling
import '../styles/bookingconfirmation.css'
import { useNavigate } from 'react-router-dom'
const userdata = {
    "name":"Geetha",
    "email":"geetha@gmail.com",
    "phone":"9875416535",
    "date":"date",
    "time":"time",
    "guests":5,

}
const BookingConfirmation = () => {
    const navigate =useNavigate();
  return (
    <div className="booking-confirmation">
      <h1>Booking Confirmation</h1>
      <div className="confirmation-details">
        <h2>Your Booking Details</h2>
        <p><strong>Name:</strong> {userdata.name}</p>
        <p><strong>Email:</strong> {userdata.email}</p>
        <p><strong>Phone:</strong> {userdata.phone}</p>
        <p><strong>Booking Date:</strong> {userdata.date}</p>
        <p><strong>Booking Time:</strong> {userdata.time}</p>
        <p><strong>Number of Guests:</strong> {userdata.guests}</p>
      </div>
      <div className="confirmation-actions">
        <button className="confirm-button" onClick={()=>navigate("/thank-you")}>Confirm Booking</button>
      </div>
    </div>
  );
};

export default BookingConfirmation;
