const { addMessage, getMessages, checkMessage } = require("../controllers/messageController");
const router = require("express").Router();

router.post("/addmsg/", addMessage);
router.post("/getmsg/", getMessages);
router.post("/checkmsg/", checkMessage);

module.exports = router;
