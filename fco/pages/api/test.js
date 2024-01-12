export default (req, res) => {
  const { query } = req.query;

  if (!query) {
    return res.status(400).json({ error: 'Missing query parameter' });
  }

  const result = `Searching for: ${query}`;
  res.status(200).json({ result });
};