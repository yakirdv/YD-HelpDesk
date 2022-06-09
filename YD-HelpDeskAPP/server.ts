import express from "express";
const app = express();
const port: number = 3001;

app.use(express.static("public"));



app.listen(port, () => {
    return console.log(`Server is listening at http://localhost:${port}`);
  });