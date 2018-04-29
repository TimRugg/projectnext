const router = require("express").Router();
// const bookRoutes = require("./books");
const projectRoutes = require("./projects");
const actionRoutes = require("./actions");

// Project routes
router.use("/projects", projectRoutes);

// Action routes
router.use("/actions", actionRoutes);

module.exports = router;
