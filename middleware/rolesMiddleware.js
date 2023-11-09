//const { parse } = require("uuid");
const users = require("../models/users");

// Define role-based middleware
function checkRole(role) {
    return (req, res, next) => {
      const userId = req.query.userId;
      const user = users.find((user) => user.id === parseInt(userId));
      if (user && user.role === role) {
        next(); // User has the required role, continue to the next middleware
      } else {
        res.status(403).json({ message: 'Access denied' }); // User doesn't have the required role
      }
    };
  }
  
  module.exports = {
    checkRole,
  };