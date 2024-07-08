"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const shamanController_1 = require("../controllers/shamanController");
const shamanRouter = (0, express_1.Router)();
shamanRouter.get("/shamans", shamanController_1.getAllShamans);
shamanRouter.get("/shamans/:name", shamanController_1.getShamanByName);
exports.default = shamanRouter;
