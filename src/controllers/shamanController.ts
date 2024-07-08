import { Request, Response } from "express";
import Shaman, { IShaman } from "../models/shaman";

export const getAllShamans = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const allShaman: IShaman[] = await Shaman.find({});
    res.status(200).json(allShaman);
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
    res.status(200).json(shaman);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};
