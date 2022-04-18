export default async function activateAdmin(req, res) {
    const hash = req.query.hash;
    if (!hash) {
      return res.status(401).json({message: 'Cannot Validate an Admin!'})
    }
  
    const response = await fetch(`http://localhost:4000/api/activate/${hash}`);
    if (response.status >= 400) {
      return res.status(401).json({message: 'Cannot Validate an Admin!'})
    } else {
      res.writeHead(307, { Location: '/api/activated' });
      res.end();
    }
  }