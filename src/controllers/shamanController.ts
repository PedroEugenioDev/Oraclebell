import { Request, Response } from "express";
import Shaman, { IShaman } from "../models/shaman";

export const getAllShamans = async (
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

export const getShamanByName = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const name: string = req.params.name;
    const shaman: IShaman[] = await Shaman.find({ name: name });
    console.log("Dados encontrados:\n" + shaman);
    res.status(200).send(shaman);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};
