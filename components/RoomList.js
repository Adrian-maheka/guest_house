const RoomList = ({ rooms }) => {
  return (
    <div>
      <h2>Available Rooms</h2>
      <ul>
        {rooms.map(room => (
          <li key={room.id}>
            <h3>{room.name}</h3>
            <p>Price: ${room.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RoomList;
