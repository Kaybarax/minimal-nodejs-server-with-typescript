import express from "express";

const app = express();
const port = 9010;

app.get("/", (req, res) => {
  res.send("Stop looking at the server!");
});

app.listen(port, (err) => {
  if (err) {
    return console.error(err);
  }
  return console.log(`server is listening on ${port}, go to your browser and open localhost:9010 in the address bar`);
});
