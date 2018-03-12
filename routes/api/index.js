const router = require("express").Router();
const choreRoutes = require("./chores");
<<<<<<< HEAD
const userRoutes = require("./user");
=======
const userRoutes = require("./users");
>>>>>>> 4513b82c1015814854aad05d38d27249bb327ce1


// both routes
router.use("/chores", choreRoutes);
<<<<<<< HEAD
router.use("/user", userRoutes);
=======
router.use("/users", userRoutes);
>>>>>>> 4513b82c1015814854aad05d38d27249bb327ce1

module.exports = router;
