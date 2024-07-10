import { Request, Response } from "express";
import Manga, { IManga } from "../models/manga";

export const getAllMangas = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const allManga: IManga[] = await Manga.find({});
    res.status(200).json(allManga);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};

export const getMangaByTitle = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const name: string = req.params.name;
    const manga: IManga[] = await Manga.find({ name: name });
    res.status(200).json(manga);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};
