const router = require("express").Router();
const choreRoutes = require("./chores");

// Chore routes
router.use("/chores", choreRoutes);

module.exports = router;
