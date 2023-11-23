import jwt from "jsonwebtoken";

export const authToken = (req, res, next) => {
    const {token} = req.cookies;

    console.log(token)

    if(!token) return res.status(401).json({message:"No token provied"});

    jwt.verify(token,process.env.JWT_SECRET,(err,user)=>{
        if (err) return res.status(403).json({message:"Invalid token"});
        req.user = user;
        next();
    });
    // console.log(req.cookies.token);
}