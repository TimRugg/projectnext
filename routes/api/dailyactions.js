const router = require("express").Router();
const dailyActionsController = require("../../controllers/dailyActionsController");

// Matches with "/api/dailyActions/:id"
router.route("/:id")
  .get(dailyActionsController.findById)
  .put(dailyActionsController.update)

module.exports = router;
