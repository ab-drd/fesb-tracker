const express = require('express');

const rootRouter = express.Router();

rootRouter.get('/', (req, res) => {
    res.send('Application!');
})

module.exports = rootRouter;