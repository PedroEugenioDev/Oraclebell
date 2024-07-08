import { Request, Response } from "express";
import Spirit, { ISpirit } from "../models/spirit";

export const getAllSpirits = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const allSpirit: ISpirit[] = await Spirit.find({});
    res.status(200).json(allSpirit);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};

export const getSpiritByName = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const name: string = req.params.name;
    const spirit: ISpirit[] = await Spirit.find({ name: name });
    res.status(200).json(spirit);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};
