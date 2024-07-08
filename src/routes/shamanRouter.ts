import { Router } from "express";
import { getAllShaman } from "../controllers/shamanController";

const shamanRouter = Router();

shamanRouter.get("/shamans", getAllShaman);

export default shamanRouter;
