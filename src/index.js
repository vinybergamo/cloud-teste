const expree = require("express");

const app = expree();

const router = expree.Router();

app.get("/", (req, res) => {
  return res.status(200).json({
    message: "Hello World",
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
