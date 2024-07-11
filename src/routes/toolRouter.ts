import { Router } from "express";
import { getAllTools, getToolByName } from "../controllers/toolController";

const toolRouter = Router();

toolRouter.get("/tools", getAllTools);
toolRouter.get("/tools/:name", getToolByName);

export default toolRouter;
