import mongoose, { Schema } from "mongoose";

export interface IAnime {
  name: string;
  episodes: object[];
  music: object[];
}

const animeSchema = new Schema<IAnime>(
  {
    name: { type: String, required: true },
    episodes: [Object],
    music: [Object],
  },
  { collection: "Animes" }
);

const Anime = mongoose.model<IAnime>("Anime", animeSchema, "Animes");

export default Anime;
