const express = require("express");
const path = require("path");
const redditdata = require("./data.json");
const app = express();

// To enable Express to use Embedded JavaScript for tempalting
// npm i ejs
// The default directory for views is the /views folder.
app.set("view engine", "ejs");
// This can be changed with the app.set() function like this:
app.set("views", path.join(__dirname, "/views"));

// To serve static files (like: css, javascript, images, etc...)
// Serves static files from the public directory
app.use(express.static(path.join(__dirname, "public")));




app.get("/", (req, res) => {
   // This send the response with views/home.ejs content
   res.render("home");
});

app.get("/rand", (req, res) => {
   const num = Math.floor(Math.random() * 10) + 1;
   // Passing key value pair data to ejs files
   res.render("random", { rand: num });
   // Key and value is the same
   //res.render("random", {num});
});

app.get("/cats", (req, res) => {
   const cats = [
      "Blue", "Rocket", "Stephanie", "Winston"
   ];
   res.render("cats", { cats });
});

app.get("/r/:subreddit", (req, res) => {
   const { subreddit } = req.params;
   const data = redditdata[subreddit];
   if (data) {
      res.render("subreddit", {...data}); // Spread the data object into the view   
   } else {
      res.render("notfound", {subreddit})
   }
});

app.listen(3000, () => {
   console.log("LISTENING ON PORT 3000");
})