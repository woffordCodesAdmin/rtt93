const express = require("express");
// ----Bringing in Express / Import

const app = express();
// ---Connects express instance to the variable 'app'
// ---------------------------------{Requirements}

app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

//----------------------------------{Middleware}

const plants = [
  "Monstera Deliciosa",
  "Corpse Flower",
  "Elephant-Foot Yam",
  "Witches' Butter",
];
const foods = ["Apple","Orange","Kiwi"]

// -------------------------------------{Create Routes Based on Path/REST}

app.get("/", (req, res) => {
  res.send("<h1> Hola Mundo 2 </h1>");
});


  
app.get("/home", (req, res) => {
  res.render("Home");
});

app.get("/about", (req, res) => {
  res.render("About");
});

app.get("/contact", (req, res) => {
  res.render("Contact");
});

app.get("/something", (req, res) => {
  res.render("Something");
});

app.get('/allfood',(req,res)=>{
    res.send(foods)
})
// -------->Get all Foods
// ----------------------{QueryParam}
app.get("/:indexOfFoodsArray", (req, res) => {
    if (foods[req.params.indexOfFoodsArray]) {
        res.send(foods[req.params.indexOfFoodsArray] + "is my favorite treat");
  } else {
    res.send('cannot find anything at this index: ' + req.params.indexOfFoodsArray);
  }
});

app.get('/linkedin/:firstname',(req,res)=>{
    console.log("REQ PARAMS: ", req.params);
    console.log("REQ QUERY: ", req.query);
    res.send(`Hola ${req.query.title}  ${req.params.firstname}`)
})





app.listen("3000", (req, res) => {
  console.log(`Server Listening on Port 3000`);
});
// -----Creates the Server based on PORT value
