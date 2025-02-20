const express = require("express");
const path = require("path");
const pokemonRoutes = require("../routes/pokemon");
const dotenv = require("dotenv");
dotenv.config();

const app = express();

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "../public")));

/* app.get("/", (req, res) => {
  return res.status(200).json({
    message: "Hello World",
  });
}); */

app.use("/", pokemonRoutes);

const PORT = 8000 || process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
