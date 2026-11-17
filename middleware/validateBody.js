exports.requireBody = (req, res, next) => {
  if (!req.body || Object.keys(req.body).length === 0) {
    return res.status(400).json({ error: 'Request body cannot be empty' });
  }
  next();
};

exports.validateStockChange = (req, res, next) => {
  const { change } = req.body || {};
  if (typeof change !== 'number' || change === 0) {
    return res.status(400).json({ error: '"change" must be a non-zero number (positive = restock, negative = sale)' });
  }
  next();
};