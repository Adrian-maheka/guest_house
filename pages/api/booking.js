import { useEffect, useState } from 'react';
import BookingForm from '../components/BookingForm';

const BookingPage = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  if (!isAuthenticated) {
    return <p>Please log in to access this page.</p>;
  }

  return (
    <div>
      <h1>Booking Page</h1>
      <BookingForm />
    </div>
  );
};

export default BookingPage;
