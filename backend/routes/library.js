const { Router } = require("express");
const express = require("express");
const { updateLocale } = require("moment");
const router = express.Router();
const LibraryController = require("../controllers/library");

router.post("/registerLibrary" , LibraryController.registerLibrary);
router.get("/listLibrary" , LibraryController.listLibrary);
router.put("/updateLibrary" ,LibraryController.updateLibrary);

module.exports = router;