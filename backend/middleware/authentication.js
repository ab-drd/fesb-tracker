const JsonWebTokenServices = require("../services/jwt");
const UserServices = require("../services/users");

class Authentication {
    static async auth(req, res,next) {
        try {
            const { authorization } = req.headers;
            console.log('From auth: ', authorization);

            if(!authorization) {
                return res.status(401).json({
                    error: "You are not logged in.",
                })
            }

            const token = authorization.replace('Bearer ', '').trim();

            const decoded = await JsonWebTokenServices.verifyAccessToken(token);
            console.log("Decoded: ", decoded);

            if (!decoded.id) {
                return res.status(401).json({
                  error: 'Bad token. Please login again',
                });
            }

            const student = await UserServices.findStudentById(decoded.id - 1);

            if (student === null) {
                return res.status(401).json({
                  error: 'Student does not exist.',
                });
              }

            req.user= student;
            next();
        } catch (error) {
            console.error(error);
        }
    }
}

module.exports = Authentication;