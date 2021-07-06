import express from "express";
import * as dotenv from 'dotenv'

dotenv.config()
const app = express();

app.get("/", (_, res) => {
  res.send("your lost lol");
});

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});
