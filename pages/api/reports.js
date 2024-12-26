import { useEffect, useState } from 'react';

const ReportsPage = () => {
  const [reports, setReports] = useState(null);

  useEffect(() => {
    fetch('/api/reports')
      .then(res => res.json())
      .then(data => setReports(data));
  }, []);

  return (
    <div>
      <h1>Booking Reports</h1>
      {reports ? (
        <p>Total bookings: {reports.bookingsCount}</p>
      ) : (
        <p>Loading reports...</p>
      )}
    </div>
  );
};

export default ReportsPage;
