export const authToken = (req, res, next) => {
    console.log(req.cookies.token);
    next();
}