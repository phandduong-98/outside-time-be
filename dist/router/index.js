"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var authentication_1 = __importDefault(require("./authentication"));
var users_1 = __importDefault(require("./users"));
var chapter_1 = __importDefault(require("./chapter"));
var router = express_1.default.Router();
exports.default = (function () {
    (0, authentication_1.default)(router);
    (0, users_1.default)(router);
    (0, chapter_1.default)(router);
    return router;
});
//# sourceMappingURL=index.js.map