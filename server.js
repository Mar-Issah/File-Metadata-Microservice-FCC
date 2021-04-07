"use strict";
var express = require("express");
var cors = require("cors");
require("dotenv").config();
var multer = require("multer");

var app = express();

app.use(cors());
app.use("/public", express.static(process.cwd() + "/public"));

app.get("/", function(req, res) {
  res.sendFile(process.cwd() + "/views/index.html");
});

//==============================================================================================================================================

//Multer is a node.js middleware for handling multipart/form-data, which is primarily used for uploading files. I

//Multer adds a body object and a file or files object to the request object. The body object contains the values of the text fields of the form,
//the file or files object contains the files uploaded via the form. each file contains certain information that can be retrieved using mutler


app.post("/api/fileanalyse", multer().single("upfile"), (req, res) => {

  let responseObject = {};

  responseObject["name"] = req.file.originalname;
  responseObject["type"] = req.file.mimetype;
  responseObject["size"] = req.file.size;

  res.json(responseObject);

});

//=============================================================================================
const port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log("Your app is listening on port " + port);
});
