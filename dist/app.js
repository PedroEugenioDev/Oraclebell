"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/", function (request, response) {
    console.log(`root requested ${request.params}`);
    response.send("Olá, mundo");
});
app.listen(PORT, () => {
    console.log(`Server running...`);
});
