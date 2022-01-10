const express = require("express");
const { createEvent, getAllEvents } = require("../controllers/event");


const router = express.Router();

router.get("/events", getAllEvents);
router.post("/events", createEvent);


module.exports = router;
