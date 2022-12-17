const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//connect to mongodb
mongoose.connect(process.env.mongo_url, () => {
  console.log("connected to mongoose");
});

//data schema
const itemSchema = {
  name: String,
  email: String,
  subject: String,
  service: String,
  message: String,
};

//data model
const Item = mongoose.model("messages", itemSchema);

//add item in todo list post request
app.post("/addItem", async (req, res) => {
  const newItem = new Item({
    name: req.body.name,
    email: req.body.email,
    subject: req.body.subject,
    service: req.body.service,
    message: req.body.message,
  });
  newItem.save().then(res.send("Message sent successfully."));
});

// __dirname = path.resolve();
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static(path.join(__dirname,'/client/build')));

//   app.get('*',(req,res) => {
//     res.sendFile(path.resolve(__dirname,'client','build','index.html'));
//   })
// } else {
//   app.get("/", (req, res) => {
//     res.send("API running...");
//   });
// }

if (process.env.NODE_ENV == "production") {
  const path = require("path");

  app.get("/", (req, res) => {
    app.use(express.static(path.resolve(__dirname, "client", "build")));
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(process.env.PORT, function () {
  console.log("Express is running on port: " + process.env.PORT);
});
