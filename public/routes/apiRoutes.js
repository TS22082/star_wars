const express = require("express");
const router = express.Router();

function Character(routename, name, rank, forcepoints) {
  this.routename = routename;
  this.name = name;
  this.rank = rank;
  this.forcepoints = forcepoints;
}

let characters = [
  new Character("yoda", "Yoda", "Jedi Master", 3000),
  new Character("darthmaul", "Darth Maul", "Sith Lord", 1500),
  new Character("obiwankenobi", "Obi Wan Kenobi", "Jedi Master", 2200)
];

router.get("/", (req, res) => {
  res.send(characters);
});

router.get("/:character", (req, res) => {
  const search = req.params.character;

  for (let i = 0; i < characters.length; i++) {
    if (characters[i].routename === search) {
      res.send(characters[i]);
      return;
    }
  }
  res.send("Sorry cant find");
});

router.post("/", (req, res) => {
  let toFormat = req.body.name;
  const formatted = toFormat
    .split(" ")
    .join("")
    .toLowerCase();

  characters.push(
    new Character(
      formatted,
      req.body.name,
      req.body.rank,
      parseInt(req.body.forcepoints)
    )
  );
  res.send(characters);
});

module.exports = router;
