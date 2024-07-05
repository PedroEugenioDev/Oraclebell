import { Request, Response } from "express";
import express from "express";

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/helloworld", function (request: Request, response: Response) {
  response.send("Hello, World!");
});

app.listen(PORT, () => {
  console.log(`Server running...`);
});
