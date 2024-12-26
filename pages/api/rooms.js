const rooms = [
  { id: 1, name: 'Room 1', price: 100 },
  { id: 2, name: 'Room 2', price: 150 },
];

export default function handler(req, res) {
  return res.status(200).json(rooms);
}
