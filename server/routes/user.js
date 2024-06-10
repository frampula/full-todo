const Router = require('express');
const UserController = require('../controllers/user.controller');

const userRouter = Router();

// POST http://localhost:5001/api/users/registration
userRouter.post('/registration', UserController.registrationUser);
// POST http://localhost:5001/api/users/login
userRouter.post('/login', UserController.loginUser);

module.exports = userRouter;