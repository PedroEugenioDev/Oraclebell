"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const animeController_1 = require("../controllers/animeController");
const animeRouter = (0, express_1.Router)();
animeRouter.get("/animes", animeController_1.getAllAnimes);
animeRouter.get("/animes/:title", animeController_1.getAnimeByTitle);
exports.default = animeRouter;
