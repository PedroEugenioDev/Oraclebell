import mongoose, { Schema } from "mongoose";

export interface ITool {
  name: string;
  type?: string;
  description: string;
}

const toolSchema = new Schema<ITool>(
  {
    name: { type: String, required: true },
    type: String,
    description: { type: String, required: true },
  },
  { collection: "Tools" }
);

const Tool = mongoose.model<ITool>("Tool", toolSchema, "Tools");

export default Tool;
