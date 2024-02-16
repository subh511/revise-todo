const express = require("express");
const { createTodo, updateTodo } = require("./type");
const { todo } = require("./db");

const app = express();

app.use(express.json());

const port = 3000;

app.post("/todo", async function (req, res) {
  const createPayload = req.body; // for post req
  const parsePayload = createTodo.safeParse(createPayload); // brought zod for necessary steps
  if (!parsePayload) {
    //saying if payload fails send status 411
    res.status(411).json({
      msg: "you have sent a wrong data",
    });
    return;
  }
  //put it on mongodb;
  // todo.find used to find all data in collection but create is used to create the data in database;

  await todo.create({
    title: createPayload.title,
    description: createPayload.title,
  });
  res.json({
    msg: "todo created!",
  });
});

app.get("/todos", async function (req, res) {
  const todos = await todo.find({});
  res.json({
    todos
  })
});

app.put("/completed", function (req, res) {
  const createPayload = req.body;
  const parsePayload = updateTodo.safeParse(createPayload);
  if (!parsePayload) {
    res.status(411).json({
      msg: "you have sent a wrong data",
    });
    return;
  }
});

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
