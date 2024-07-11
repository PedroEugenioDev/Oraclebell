import { Request, Response } from "express";
import Tool, { ITool } from "../models/tool";

export const getAllTools = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const allTool: ITool[] = await Tool.find({});
    res.status(200).json(allTool);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};

export const getToolByName = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const name: string = req.params.name;
    const tool: ITool[] = await Tool.find({ name: name });
    res.status(200).json(tool);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};
