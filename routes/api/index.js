const router = require("express").Router();
const choreRoutes = require("./chores");
const userRoutes = require("./user");


// both routes
router.use("/chores", choreRoutes);
router.use("/user", userRoutes);

module.exports = router;
