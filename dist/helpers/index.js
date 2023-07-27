"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authentication = exports.random = void 0;
var crypto_1 = __importDefault(require("crypto"));
var SECERET = "NOSECRET";
var random = function () { return crypto_1.default.randomBytes(128).toString("base64"); };
exports.random = random;
var authentication = function (salt, password) {
    return crypto_1.default
        .createHmac("sha512", [salt, password].join("/"))
        .update(SECERET).digest("hex");
};
exports.authentication = authentication;
//# sourceMappingURL=index.js.map