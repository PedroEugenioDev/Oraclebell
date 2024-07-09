import { Request, Response } from "express";
import Anime, { IAnime } from "../models/anime";

export const getAllAnimes = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const allAnime: IAnime[] = await Anime.find({});
    res.status(200).json(allAnime);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};

export const getAnimeByTitle = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const title: string = req.params.title;
    const anime: IAnime[] = await Anime.find({ title: title });
    res.status(200).json(anime);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};
