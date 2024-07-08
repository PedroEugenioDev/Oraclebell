"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const spiritController_1 = require("../controllers/spiritController");
const spiritRouter = (0, express_1.Router)();
spiritRouter.get("/spirits", spiritController_1.getAllSpirits);
spiritRouter.get("/spirits/:name", spiritController_1.getSpiritByName);
exports.default = spiritRouter;
