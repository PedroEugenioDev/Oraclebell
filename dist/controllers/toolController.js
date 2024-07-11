"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getToolByName = exports.getAllTools = void 0;
const tool_1 = __importDefault(require("../models/tool"));
const getAllTools = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allTool = yield tool_1.default.find({});
        res.status(200).json(allTool);
    }
    catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});
exports.getAllTools = getAllTools;
const getToolByName = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const name = req.params.name;
        const tool = yield tool_1.default.find({ name: name });
        res.status(200).json(tool);
    }
    catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});
exports.getToolByName = getToolByName;
