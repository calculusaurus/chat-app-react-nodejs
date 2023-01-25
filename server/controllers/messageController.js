const Messages = require("../models/messageModel");
import axios from "axios";

module.exports.getMessages = async (req, res, next) => {
  try {
    const { from, to } = req.body;

    const messages = await Messages.find({
      users: {
        $all: [from, to],
      },
    }).sort({ updatedAt: 1 });

    const projectedMessages = messages.map((msg) => {
      return {
        fromSelf: msg.sender.toString() === from,
        message: msg.message.text,
      };
    });
    res.json(projectedMessages);
  } catch (ex) {
    next(ex);
  }
};

module.exports.addMessage = async (req, res, next) => {
  try {
    const { from, to, message } = req.body;
    const data = await Messages.create({
      message: { text: message }, // PC: database
      users: [from, to],
      sender: from,
    });

    if (data) return res.json({ msg: "Message added successfully." });
    else return res.json({ msg: "Failed to add message to the database" });
  } catch (ex) {
    next(ex);
  }
};

module.exports.checkMessage = async (req, res, next) => {
  // use api to check if message passes profanity filter
  const { from, to, message } = req.body;
  const { data } = await axios.post('https://jsonplaceholder.typicode.com/posts', message)
      .then(response => console.log(response.data))
      .catch(error => console.log(error));
  console.log(data);
  return data
}