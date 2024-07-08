import { Router } from "express";
import {
  getAllSpirits,
  getSpiritByName,
} from "../controllers/spiritController";

const spiritRouter = Router();

spiritRouter.get("/spirits", getAllSpirits);
spiritRouter.get("/spirits/:name", getSpiritByName);

export default spiritRouter;
