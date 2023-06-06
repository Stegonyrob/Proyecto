const jwt = require("jsonwebtoken");

function authChecker(req, res, next) {
  if (req.headers.authorization === undefined) {
    return res.status(401).json({ error: "token is required" });
  } else {
    let token = req.headers.authorization;
    token = token.split(" ")[1];
    try {
      const payload = jwt.verify(token, process.env.JWT_SECRET);
      req.user = payload;
      console.log(req.user);

    } catch (err) {
      return res.status(401).json({ error: "token is not valid" });
    }
    next();
  }
};

module.exports = authChecker;