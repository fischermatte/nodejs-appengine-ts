"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// Create a new express app instance
const PORT = Number(process.env.PORT) || 8080;
const app = express_1.default();
app.get("/", function (req, res) {
    res.send("Hello World!");
});
app.listen(PORT, function () {
    console.log("App is listening on port 3000!");
});
//# sourceMappingURL=server.js.map