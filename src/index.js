const expree = require("express");

const app = expree();

app.get("/", (req, res) => {
  return res.status(200).json({
    message: "Um nome",
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
