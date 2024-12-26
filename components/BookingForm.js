import { useState } from 'react';

const BookingForm = ({ onSubmit }) => {
  const [room, setRoom] = useState('');
  const [guestName, setGuestName] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ room, guestName, checkIn, checkOut });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Guest Name" 
        value={guestName} 
        onChange={(e) => setGuestName(e.target.value)} 
      />
      <input 
        type="date" 
        value={checkIn} 
        onChange={(e) => setCheckIn(e.target.value)} 
      />
      <input 
        type="date" 
        value={checkOut} 
        onChange={(e) => setCheckOut(e.target.value)} 
      />
      <select value={room} onChange={(e) => setRoom(e.target.value)}>
        <option value="">Select Room</option>
        <option value="1">Room 1</option>
        <option value="2">Room 2</option>
      </select>
      <button type="submit">Book Now</button>
    </form>
  );
};

export default BookingForm;
