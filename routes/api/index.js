const router = require("express").Router();
const choreRoutes = require("./chores");
const userRoutes = require("./users");

// Chore routes
router.use("/chores", choreRoutes);
router.use("/users", userRoutes);

module.exports = router;
