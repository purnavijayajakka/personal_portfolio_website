const express = require("express");
const router  = express.Router();
const Message = require("../models/Message");

// POST save contact message
router.post("/", async (req, res) => {
  try {
    const { name, email, message } = req.body;
    if (!name || !email || !message)
      return res.status(400).json({ error: "All fields required" });

    const saved = await new Message({ name, email, message }).save();
    res.status(201).json({ success: true, id: saved._id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET all messages (admin use)
router.get("/", async (req, res) => {
  try {
    const messages = await Message.find().sort({ createdAt: -1 });
    res.json(messages);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
