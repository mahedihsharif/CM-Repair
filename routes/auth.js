const {
  signupController,
  signinController,
} = require("../controllers/authController");
const {
  signupValidator,
  signinValidator,
  validatorResult,
} = require("../middleware/authValidator");

const router = require("express").Router();

router.post("/register", signupValidator, signupController, validatorResult);
router.post("/signin", signinValidator, signinController, validatorResult);

module.exports = router;
