"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const database_1 = __importDefault(require("./config/database"));
const shamanRouter_1 = __importDefault(require("./routes/shamanRouter"));
const spiritRouter_1 = __importDefault(require("./routes/spiritRouter"));
const animeRouter_1 = __importDefault(require("./routes/animeRouter"));
const mangaRouter_1 = __importDefault(require("./routes/mangaRouter"));
const toolRouter_1 = __importDefault(require("./routes/toolRouter"));
const gameRouter_1 = __importDefault(require("./routes/gameRouter"));
dotenv_1.default.config();
(0, database_1.default)();
const PORT = process.env.PORT || 3000;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use("/api", shamanRouter_1.default);
app.use("/api", spiritRouter_1.default);
app.use("/api", animeRouter_1.default);
app.use("/api", mangaRouter_1.default);
app.use("/api", toolRouter_1.default);
app.use("/api", gameRouter_1.default);
app.get("/api", function (request, response) {
    response.send("Welcome to Oraclebell, the Shaman King API");
});
app.listen(PORT, () => {
    console.log(`Server running...`);
});
