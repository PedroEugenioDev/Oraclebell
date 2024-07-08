import { Request, Response } from "express";
import Shaman, { IShaman } from "../models/shaman";

export const getAllShaman = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const allShaman: IShaman[] = await Shaman.find({});
    console.log("Dados encontrados:\n" + allShaman);
    res.status(200).send("Shamans");
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};
