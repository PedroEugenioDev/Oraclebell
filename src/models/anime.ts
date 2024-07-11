import mongoose, { Schema } from "mongoose";

export interface IAnime {
  title: string;
  episodes: object[];
  music: object[];
}

const animeSchema = new Schema<IAnime>(
  {
    title: { type: String, required: true },
    episodes: [Object],
    music: [Object],
  },
  { collection: "Animes" }
);

const Anime = mongoose.model<IAnime>("Anime", animeSchema, "Animes");

export default Anime;
