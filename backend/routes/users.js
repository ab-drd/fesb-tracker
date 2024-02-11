const express = require('express');

const UserController = require('../controllers/users');
const Authentication = require('../middleware/authentication');

const userRouter = express.Router();

userRouter.post('/login', async (req, res) => {
    await UserController.login(req, res);
})

//dohvaca današnje prisustvo za ulogiranog korisnika
userRouter.get('/presencetoday', Authentication.auth, async (req, res) => {
    await UserController.presenceToday(req, res);
})

//dohvaca ukupno prisustvo ulogiranog korisnika
userRouter.get('/presence', Authentication.auth, async (req, res) => {
    await UserController.presenceTotal(req, res);
})

//dohvaca današnji raspored ulogiranog korisnika
userRouter.get('/scheduletoday', Authentication.auth, async (req, res) => {
    await UserController.scheduleToday(req, res);
})

userRouter.get('/scheduleweek', Authentication.auth, async (req, res) => {
    await UserController.scheduleWeek(req, res);
})

userRouter.patch('/updatescheduletoday', Authentication.auth, async (req, res) => {
    await UserController.scheduleTodayUpdate(req, res);
})

module.exports = userRouter;