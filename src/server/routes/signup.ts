// sign up router

import userController from '../controller/userController';

const express = require('express');
const router = express.Router();

// cookie and session controllers here

router.post('/',
  userController.createUser,
  (req, res) => {
    console.log("Inside signup route"); // Add this line to check if the route is being accessed

    res
      .status(200)
      .json(res.locals.user)
  }
);

export default router;
