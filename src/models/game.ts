import mongoose, { Schema } from "mongoose";

export interface IGame {
  title: string;
  release: Date;
  description: string;
  genre: string;
  platform: string;
  developer: string;
  publisher?: string;
}

const gameSchema = new Schema<IGame>(
  {
    title: { type: String, required: true },
    release: { type: Date, required: true },
    description: String,
    genre: String,
    platform: String,
    developer: String,
    publisher: String,
  },
  { collection: "Games" }
);

const Game = mongoose.model<IGame>("Game", gameSchema, "Games");

export default Game;
