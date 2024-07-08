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
exports.getSpiritByName = exports.getAllSpirits = void 0;
const spirit_1 = __importDefault(require("../models/spirit"));
const getAllSpirits = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allSpirit = yield spirit_1.default.find({});
        res.status(200).json(allSpirit);
    }
    catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});
exports.getAllSpirits = getAllSpirits;
const getSpiritByName = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const name = req.params.name;
        const spirit = yield spirit_1.default.find({ name: name });
        res.status(200).json(spirit);
    }
    catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});
exports.getSpiritByName = getSpiritByName;
