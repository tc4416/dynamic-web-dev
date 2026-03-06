const nedb = require('@seald-io/nedb');
const express = require("express");
const app = express();
let database = new nedb({ filename: "poems.db", autoload: true });
// const db = new Datastore({ filename: 'poems.db', autoload: true });


// make sure poems folder existsf
// 
//fs.mkdirSync('poems', { recursive: true });


app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); 

// fridge-poem as main-page
app.get("/fridge-poem", (request, response) => {
  response.sendFile("fridge-poem.html", { root: "./public" });
});

// gallery page
app.get("/gallery", (request, response) => {
  response.sendFile("gallery.html", { root: "./public" });
});


//class demo

// app.post("/post", (request, response) => {
//   console.log(request.body);

//   let date = new Date()

//   let dataToBeAdded = {
//     username: request.body.user,
//     content: request.body.content,
//     time: date.toLocaleString()
//   };

//   // 2 params:
//   // 1. obj to be added
//   // 2. action (callback function)
//   database.insert(dataToBeAdded, (err, dbData) => {
//     // err is populated by nedb if there is error
//     if (err) console.log(err);
//     // print out the data that was added to the db
//     console.log(dbData);
//   });


//insert data into database
app.post("/save-poem", (request, response) => {
  const datatosave = {
    image: request.body.image,
    createdAt: request.body.createdAt
  };

  database.insert(datatosave, function (err, newDoc){
    if (err){console.log(err)}
    if (newDoc){console.log(newDoc)}
    response.json({ success: true, id: newDoc._id });
  });
});

// get  poems
app.get("/get-poems", (request, response) => {
  let query = {};
  database.find(query, function(err, results) {
    console.log("results: ", results);
    response.json({ poems: results });
  });
});





app.listen(8000, () => {
  console.log("server is running");
});