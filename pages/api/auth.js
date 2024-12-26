import jwt from 'jsonwebtoken';

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { username, password } = req.body;
    
    if (username === 'admin' && password === 'adminpassword') {
      const token = jwt.sign({ user: 'admin' }, 'your-secret-key', { expiresIn: '1h' });
      return res.status(200).json({ token });
    }

    return res.status(401).json({ error: 'Unauthorized' });
  }

  return res.status(405).json({ error: 'Method Not Allowed' });
}
