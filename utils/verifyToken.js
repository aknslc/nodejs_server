import jwt from 'jsonwebtoken'


export const verifyToken = (req, res, next) => {
    const token = req.cookies.access_token;

    if (!token) return res.status(401).send("You are not authenticated");

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) return res.status(403).send("Token is not valid");
        req.user = user
        next();
    })
}


export const verifyUser = (req, res, next) => {
    verifyToken(req, res, next, () => {
        if (req.user.id === req.params.id || req.user.isAdmin) {
            next();
            
        } else {
            return res.send("You are not authorized");
        }


    })
}


export const verifyAdmin = (req, res, next) => {
    verifyToken(req, res, () => {
        if (req.user.isAdmin) {
            next();
        } else {
            return res.send("You are not authorized");
        }
    })
}