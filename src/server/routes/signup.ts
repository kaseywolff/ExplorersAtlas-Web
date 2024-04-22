const router = express.Router();


// cookie and session controllers here

router.post('/',
  userController.createUser,
  (req, res) => {
    res
      .status(200)
      .json(res.locals.user)
  }
);