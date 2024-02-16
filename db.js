const mongoose = require("mongoose");

//srv - mongodb+srv://ssdhal98:subhranshu@12@cluster0.qcapyxu.mongodb.net/
mongoose.connect("mongodb+srv://ssdhal98:subhranshu@12@cluster0.qcapyxu.mongodb.net/todos")

const todoSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const todo = mongoose.model('todos',todoSchema);

module.exports = {
    todo
}
