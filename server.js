const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("./public/client"));

const apiRoutes = require("./public/routes/apiRoutes");
app.use("/api", apiRoutes);

const clientRoutes = require("./public/routes/clientRoutes");
app.use("/", clientRoutes);

app.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}`);
});
