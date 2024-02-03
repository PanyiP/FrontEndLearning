const express = require("express");
const {v4: uuidv4} = require("uuid");
const methodOverride = require("method-override");
const path = require("path");
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

// Set how to process form data
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

app.listen(3000, () => {
   console.log("LISTENING ON PORT 3000");
});



// "Database"
const comments = [
   {
      id: uuidv4(),
      username: "Todd",
      comment: "Lol that's so funny!"
   },
   {
      id: uuidv4(),
      username: "Skyler",
      comment: "I like to go birdwatching with my dog"
   },
   {
      id: uuidv4(),
      username: "Sk8terBoi",
      comment: "Plz delete your account, Todd!"
   },
   {
      id: uuidv4(),
      username: "onlysaywoof",
      comment: "woof woof woof"
   }
];


// GET    /comments     - list all comments
// GET    /comments/:id - Get one comment (using ID)
// POST   /comments     - create a new comment
// PATCH  /comments/:id - Update one comment (using ID)
// DELETE /comments/:id - Delete one comment (using ID)

// View list of comments
app.get("/comments", (req, res) => {
   res.render("comments/index", { comments });
});

// Create new comment
app.get("/comments/new", (req, res) => {
   res.render("comments/new")
});

app.post("/comments", (req, res) => {
   console.log(req.body);
   const {username, comment} = req.body;
   comments.push({username, comment, id: uuidv4()});
   res.redirect("/comments");
});

// View one comment by id
app.get("/comments/:id", (req, res) => {
   const { id } = req.params;
   const comment = comments.find(c => c.id === id);
   res.render("comments/show", { comment });
});

// Update comment
// PUT - Update whole thing (replace)
// PATCH - Update only part of the thing (partial modification)

app.get("/comments/:id/edit", (req, res) => {
   const { id } = req.params;
   const comment = comments.find(c => c.id === id);
   res.render("comments/edit", { comment });
});

app.patch("/comments/:id", (req, res) => {
   const { id } = req.params;
   const comment = comments.find(c => c.id === id);
   comment.comment = req.body.comment;
   res.redirect("/comments");
});

app.delete("/comments/:id", (req, res) => {
   const { id } = req.params;
   const comment = comments.find(c => c.id === id);
   const index = comments.indexOf(comment);
   comments.splice(index, 1);
   res.redirect("/comments");
});
