const express = require("express");
const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.get("/send-love", (request, response) => {
  response.sendFile("send-love.html", { root: "./public" });

});

//array for storing data
let receivedData = [];

app.post("/submit", (request, response) => {

  console.log(request.body);
  console.log(request.body.fromName)

  // We add all of our data to an array, so we can also display it through the /messages endpoint.
  receivedData.push({
    from: request.body.fromName,
    to: request.body.toName,
  });
  // We add a personalized follow-up message.
 // response.send("Thank you, " + request.body.fromName);
    response.sendFile("letter.html", { root: "./public" });

});


//sending data from client to server
app.get("/input", (request, response) => {
  if (receivedData.length == 0) {
    // If we don't have any data, we send an appropriate message
    response.send("No messages yet...");
  } else {
    // This will send a JSON response, populated with our data array.
    response.json({ input: receivedData });
  }
});


app.listen(8000, () => {
  console.log("server is running");
});
