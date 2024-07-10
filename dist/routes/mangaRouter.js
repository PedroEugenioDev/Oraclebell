"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const mangaController_1 = require("../controllers/mangaController");
const mangaRouter = (0, express_1.Router)();
mangaRouter.get("/mangas", mangaController_1.getAllMangas);
mangaRouter.get("/mangas/:title", mangaController_1.getMangaByTitle);
exports.default = mangaRouter;
