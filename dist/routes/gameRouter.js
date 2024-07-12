"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const gameController_1 = require("../controllers/gameController");
const gameRouter = (0, express_1.Router)();
gameRouter.get("/games", gameController_1.getAllGames);
gameRouter.get("/games/:title", gameController_1.getGameByTitle);
exports.default = gameRouter;
