import mongoose, { Schema } from "mongoose";

export interface ISpirit {
  name: string;
  type?: string;
  reiryoku?: number;
}

const spiritSchema = new Schema<ISpirit>(
  {
    name: { type: String, required: true },
    type: String,
    reiryoku: Number,
  },
  { collection: "Spirit" }
);

const Spirit = mongoose.model<ISpirit>("Spirit", spiritSchema, "Spirit");

export default Spirit;
