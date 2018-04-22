const router = require("express").Router();
// const bookRoutes = require("./books");
const projectRoutes = require("./projects");

// Book routes
// router.use("/books", bookRoutes);

// Project routes
router.use("/projects", projectRoutes);

module.exports = router;
