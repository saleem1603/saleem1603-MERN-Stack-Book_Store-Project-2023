const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/book-routes");
const cors = require("cors");
const app = express();

// Middlewares
// app.use('/', (req,res, next)=>{
//   res.send("This is my starting app")
// });

app.use(express.json());
app.use(cors());
app.use("/books", router); // localhost:5000/books

mongoose
  .connect(
    "mongodb+srv://admin:wyoJK1Gkwlq0iPhB@cluster0.5xvkpmk.mongodb.net/bookStore?retryWrites=true&w=majority"
    )
  .then(() => console.log("Connected To Database"))
  .then(() =>{
    app.listen(5000);
  })
    // console.log("Connected To Database"))
 
  .catch((err) => console.log(err));


//wyoJK1Gkwlq0iPhB