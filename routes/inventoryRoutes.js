const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const {
  createInventoryController,
  getInventoryController,
  getRecentInventoryController,
  getDonarsController,
  getHospitalController,
  getOrgnaisationController,
  getOrgnaisationForHospitalController,
  getInventoryHospitalController,
} = require("../controllers/inventoryController");

const router = express.Router();

//routes
router.post("/create-inventory", authMiddleware, createInventoryController);

router.get("/get-inventory", authMiddleware, getInventoryController);
router.get("/get-donars", authMiddleware, getDonarsController);
router.get("/get-hospitals", authMiddleware, getHospitalController);
router.get("/get-orgnaisation", authMiddleware, getOrgnaisationController);
router.get("/get-orgnaisation-for-hospital", authMiddleware,getOrgnaisationForHospitalController);
router.get("/get-recent-inventory",authMiddleware,getRecentInventoryController);
router.post("/get-inventory-hospital", authMiddleware,  getInventoryHospitalController);
module.exports = router;
