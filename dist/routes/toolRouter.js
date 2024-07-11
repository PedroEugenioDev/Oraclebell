"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const toolController_1 = require("../controllers/toolController");
const toolRouter = (0, express_1.Router)();
toolRouter.get("/tools", toolController_1.getAllTools);
toolRouter.get("/tools/:name", toolController_1.getToolByName);
exports.default = toolRouter;
