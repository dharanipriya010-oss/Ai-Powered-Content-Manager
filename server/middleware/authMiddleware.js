const authMiddleware = (req, res, next) => {

  console.log("Authenticated");

  next();

};

module.exports = authMiddleware;