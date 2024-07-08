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
exports.getShamanByName = exports.getAllShamans = void 0;
const shaman_1 = __importDefault(require("../models/shaman"));
const getAllShamans = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allShaman = yield shaman_1.default.find({});
        res.status(200).json(allShaman);
    }
    catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});
exports.getAllShamans = getAllShamans;
const getShamanByName = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const name = req.params.name;
        const shaman = yield shaman_1.default.find({ name: name });
        res.status(200).json(shaman);
    }
    catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});
exports.getShamanByName = getShamanByName;
