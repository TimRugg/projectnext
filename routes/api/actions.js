const router = require("express").Router();
const actionsController = require("../../controllers/actionsController");

// Matches with "/api/actions"
router.route("/")
  .get(actionsController.findAll)
  .post(actionsController.create);

// Matches with "/api/actions/:id"
router.route("/:id")
  .get(actionsController.findById)
  .put(actionsController.update)
  .delete(actionsController.remove);

// Matches with "/api/actions/parent/:id" push action into parent project
router.route("addAction/:id")
  .put(actionsController.addAction);

module.exports = router;
