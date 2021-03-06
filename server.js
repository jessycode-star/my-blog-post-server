import dotenv from "dotenv";
dotenv.config();
import express from "express";
const server = express();

const port = process.env.PORT;

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
