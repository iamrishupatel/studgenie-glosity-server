const express = require("express");
const { getAllNotice, createNotice } = require("../controllers/notice");


const router = express.Router();

router.get("/notices", getAllNotice);
router.post("/notices", createNotice);


module.exports = router;
