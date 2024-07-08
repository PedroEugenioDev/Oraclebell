import mongoose, { Schema } from "mongoose";

export interface IShaman {
  name: string;
  birthdate: Date;
  furyoku?: number;
  team?: string;
  spirits?: string[];
}

const shamanSchema = new Schema<IShaman>(
  {
    name: { type: String, required: true },
    birthdate: { type: Date, required: true },
    furyoku: Number,
    team: String,
    spirits: [String],
  },
  { collection: "Shaman" }
);

const Shaman = mongoose.model<IShaman>("Shaman", shamanSchema, "Shaman");

export default Shaman;
