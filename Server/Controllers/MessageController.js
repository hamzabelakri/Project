const Message = require("../Models/Message");
const getAllMessages = async (req, res) => {
  try {
    const messages = await Message.find();
    res.json({ messages });
  } catch (error) {
    res.json({ msg: "failed to get message" });
  }
};

const postMessage = async (req, res) => {
  try {
    const messageInfo = req.body;
    const newMessage = new Message({
      Name: messageInfo.Name,
      Email: messageInfo.Email,
      message: messageInfo.message,
    });
    await newMessage.save();
    res.status(201).json({ msg: "Message sent" });
  } catch (error) {
    res.status(400).json({ msg: "Failed to sent message" });
  }
};

module.exports = { getAllMessages, postMessage };
