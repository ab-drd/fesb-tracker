const express = require('express');

const rootRouter = require('./root');
const userRouter = require('./users');

const router = express.Router();

router.use("/root", rootRouter);
router.use("/", userRouter);

module.exports = router;
