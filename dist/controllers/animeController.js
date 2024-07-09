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
exports.getAnimeByTitle = exports.getAllAnimes = void 0;
const anime_1 = __importDefault(require("../models/anime"));
const getAllAnimes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allAnime = yield anime_1.default.find({});
        res.status(200).json(allAnime);
    }
    catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});
exports.getAllAnimes = getAllAnimes;
const getAnimeByTitle = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const title = req.params.title;
        const anime = yield anime_1.default.find({ title: title });
        res.status(200).json(anime);
    }
    catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});
exports.getAnimeByTitle = getAnimeByTitle;
