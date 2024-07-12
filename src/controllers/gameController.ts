import { Request, Response } from "express";
import Game, { IGame } from "../models/game";

export const getAllGames = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const allGame: IGame[] = await Game.find({});
    res.status(200).json(allGame);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};

export const getGameByTitle = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const title: string = req.params.title;
    const game: IGame[] = await Game.find({ title: title });
    res.status(200).json(game);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};
