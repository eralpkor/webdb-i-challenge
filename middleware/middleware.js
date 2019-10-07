// Custom Middleware

// Validate body on create/update 
function validateAccount(req, res, next) {
  if (!Object.keys(req.body).length) {
    res.status(400).json({ message: 'Missing account data...' });
  } else if (!req.body.name) {
    res.status(400).json({ message: 'Missing required "name" field...' });
  } else if (!req.body.budget) {
    res.status(400).json({ message: 'Missing required "budget" field...' });
  } else {
    next();
  }
}

module.exports = validateAccount;