const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

class JsonWebTokenServices {
    static async generateAccessToken(id) {
        return jwt.sign({id}, process.env.TOKEN, {
            algorithm: 'HS256',
            expiresIn: '1d',
        });
    }

    static async verifyAccessToken(token) {
        return jwt.verify(token, process.env.TOKEN, {
            algorithm: 'HS256',
        });
    }
}

module.exports = JsonWebTokenServices;