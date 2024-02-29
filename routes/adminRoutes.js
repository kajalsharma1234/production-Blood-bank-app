const express = require("express");

const {
  getDonarsListController,
  getHospitalListController,
  getOrgListController,
  deleteDonarController,
} = require("../controllers/adminController");


const authMiddleware = require("../middlewares/authMiddleware");
const adminMiddlewares = require("../middlewares/adminMiddlewares");

//router object
const router = express.Router();

//Routes

//GET || DONAR LIST
router.get(
  "/donar-list",
  authMiddleware,
  adminMiddlewares,
  getDonarsListController
);
//GET || HOSPITAL LIST
router.get(
  "/hospital-list",
  authMiddleware,
  adminMiddlewares,
  getHospitalListController
);
//GET || ORG LIST
router.get("/org-list", authMiddleware,
adminMiddlewares, getOrgListController);
// ==========================

// DELETE DONAR || GET
router.delete(
  "/delete-donar/:id",
  authMiddleware,
  adminMiddlewares,
  deleteDonarController
);

//EXPORT
module.exports = router;