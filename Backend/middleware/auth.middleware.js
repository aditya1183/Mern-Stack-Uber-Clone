const jwt = require("jsonwebtoken");

const UserModel = require("../models/user.model.js");
const blacklistTokenSchema = require("../models/blackListToken.model.js");
const captainModel = require("../models/captain.model.js");
module.exports.authUser = async (req, res, next) => {
  const token = req.cookies.token || req.headers.authorization?.split(" ")[1];
  //console.log(req.headers.authorization?.split(" ")[1]);

  if (!token) {
    return res.status(401).json({ message: "Unauthorized " });
  }
  const isblacklisted = await blacklistTokenSchema.findOne({ token: token });
  // if token is found in blacklist collection database then return unauthorized
  if (isblacklisted) {
    return res.status(401).json({ message: "Unauthorized  " });
  }

  try {
    const decoeded = await jwt.verify(token, process.env.SECRET_KEY);
    console.log(decoeded);

    const user = await UserModel.findById(decoeded.id);
    console.log(user);

    if (!user) {
      return res.status(401).json({ message: "Unauthorized  " });
    }
    req.user = user;
    return next();
  } catch (error) {
    return res.status(401).json({ message: "Unauthorized " });
  }
};

module.exports.authCaptian = async (req, res, next) => {
  const token = req.cookies.token || req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Unauthorized " });
  }
  const isblacklisted = await blacklistTokenSchema.findOne({ token: token });
  // if token is found in blacklist collection database then return unauthorized
  if (isblacklisted) {
    return res.status(401).json({ message: "Unauthorized " });
  }

  try {
    const decoeded = await jwt.verify(token, process.env.SECRET_KEY);

    const captain = await captainModel.findById(decoeded._id);

    req.captain = captain;
    return next();
  } catch (error) {
    return res.status(401).json({ message: "Unauthorized" });
  }
};
