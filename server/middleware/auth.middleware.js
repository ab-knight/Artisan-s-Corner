const jwt = require("jsonwebtoken")
const User = require("../models/Users")

module.exports = async(req,res,next) => {
    let token;
    if(
        req.headers.authorization&&
        req.headers.authorization.startsWith("Bearer")
    ){
        token = req.headers.authorization.split(" ")[1];
    }
    if(!token){
        return res.status(401).json({message: "Not authorized"});
    }
    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await user.findById(decoded.id).select("-password");
         if(!user){
        return res.status(401).json({messsage: "user not found"})
    }

    req.user = user;
    next();
      } catch (error) {
    return res.status(401).json({ message: "Token invalid or expired" });
  }
   
}