const express = require("express");
const app = express();
const PORT = 3000;
require("dotenv").config();
const mongoose = require("mongoose");
const Fruit = require("./models/fruit.js");
const fruits = require("./models/fruits");
const methodOverride = require('method-override');

// -------MiddleWare
app.set("view engine", "jsx");

app.engine("jsx", require("express-react-views").createEngine());

app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  console.log("I run for all routes");
  next();
});

app.use(methodOverride('_method'));

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.once("open", () => {
  console.log("connected to mongo");
});

app.get("/fruits", (req, res) => {
  Fruit.find({}).then((allFruits) => {
    res.render("Index", {
      fruits: allFruits,
    });
  });
});
// -------------{ Index => All Fruits }

app.post("/fruits", async (req, res) => {
  if (req.body.readyToEat === "on") {
    req.body.readyToEat = true;
  } else {
    req.body.readyToEat = false;
  }
  const newFruit = await Fruit.create(req.body)
  await res.send(newFruit);
  console.log(fruits);
  res.redirect("/fruits");
});
// -------{POST}

app.get("/fruits/new", (req, res) => {
  res.render("New");
});
// ----------------{NEW}


app.delete('/fruits/:id', async(req,res)=>{
  await Fruit.findByIdAndRemove(req.params.id)
  res.redirect('/fruits')
})
// -----------------{DELETE}

app.put('/fruits/:id', async(req, res)=>{
  if(req.body.readyToEat === 'on'){
      req.body.readyToEat = true;
  } else {
      req.body.readyToEat = false;
  }
  const updatedFruit = await Fruit.findByIdAndUpdate(req.params.id,req.body)
      
  res.redirect(`/fruits/${req.params.id}`);
  });






app.get('/fruits/:id/edit', async(req, res)=>{
const foundFruit =  await Fruit.findById(req.params.id) 
console.log("FOundFruit:", foundFruit)
  res.render('Edit',{
    fruit: foundFruit
  })
})
// ------------------------{EDIT}


app.get("/fruits/:id", async (req, res) => {
  const eachFruit = await Fruit.findById(req.params.id)
  await res.render("Show",{
    fruit: eachFruit
  })
});
// -------------{ Show => Each Fruit }

app.listen(PORT, (req, res) => {
  console.log(`Listening on 3k`);
});
// -----------------{Server}
