import mongoose, { Schema } from "mongoose";

export interface IManga {
  title: string;
  chapters: string[];
}

const mangaSchema = new Schema<IManga>(
  {
    title: { type: String, required: true },
    chapters: [String],
  },
  { collection: "Mangas" }
);

const Manga = mongoose.model<IManga>("Manga", mangaSchema, "Mangas");

export default Manga;
