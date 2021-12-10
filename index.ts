import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("ABOBA");
});

app.listen(3000, () => console.log("работаем"));
