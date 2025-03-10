const router = require("express").Router();
const { handleLogin, handleRegister } = require("../controller/usercontroller");

router.post("/register", handleRegister);
router.post("/login", handleLogin);

module.exports = router;
