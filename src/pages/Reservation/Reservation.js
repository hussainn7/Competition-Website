import React, { useState } from "react";
import "./Reservation.css";

const Reservation = () => {
  const [bookings, setBookings] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    time: "",
    tableNumber: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, date, time, tableNumber } = formData;

    if (name && date && time && tableNumber) {
      setBookings([...bookings, { name, date, time, tableNumber }]);
      setFormData({ name: "", date: "", time: "" });
    } else {
      alert("Please fill out all fields!");
    }
  };

  return (
    <div className="form-container">
      <div className="reservation">
        <h1>Book a Reservation</h1>
        <form className="reservation-form" onSubmit={handleSubmit}>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
          />
  
          <label>Date:</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
  
          <label>Time:</label>
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
          />
  
          <label>Table Number:</label>
          <select
            name="tableNumber"
            value={formData.tableNumber}
            onChange={handleChange}
            required
          >
            <option value="">Select Table</option>
            <option value="1">Table 1</option>
            <option value="2">Table 2</option>
            <option value="3">Table 3</option>
            <option value="4">Table 4</option>
          </select>
  
          <button type="submit">Book Table</button>
        </form>
  
        <ul>
          {bookings.map((booking, index) => (
            <li key={index} className="booking-item">
              {`${booking.name} booked Table ${booking.tableNumber} on ${booking.date} at ${booking.time}`}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
  
};

export default Reservation;
