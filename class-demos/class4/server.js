//library import
const express = require("express");
//const bodyParser = require("body-parser");

//setting up out express application
//instance of out express class
const app = express();

//allow the use of my static files (front-end code)
//html, css, js(interaction)
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

// const parser = bodyParser.urlencoded({ extended: true });
// app.use(parser);
let messages = [];

//similar to event listener
app.get("/send-love", (request, response) => {
  //can be html, restart server if changed
  response.send("<h1>my server is live!</h1>");
  // response.send("<h2>hello??<h2>");
});

app.post("/sign", (request, response) => {
  console.log(request.body);
  messages.push({
    guest: request.body.guestname,
    post: request.body.mesaage,
  });
  //we always need to send data at the end of every request (app.get appp.post)
  response.send("thank you for signing!");
});
//last step always
//start out express applicaiton

app.get("/all-messages", (req, res) => {
  res.json({ guests: messages });
  //response.send(messages)
});
app.listen(8000, () => {
  //not happen on browser or inspector
  console.log("start server is workingnode");
});
