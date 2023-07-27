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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = exports.login = void 0;
var users_1 = require("../db/users");
var helpers_1 = require("../helpers");
var login = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, email, password, user, expectedHash, salt, error_1;
    var _b, _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                _d.trys.push([0, 3, , 4]);
                _a = req.body, email = _a.email, password = _a.password;
                if (!email || !password) {
                    return [2 /*return*/, res.sendStatus(400)];
                }
                return [4 /*yield*/, (0, users_1.getUserByEmail)(email).select("+authentication.salt +authentication.password")];
            case 1:
                user = _d.sent();
                if (!user) {
                    return [2 /*return*/, res.sendStatus(400)];
                }
                expectedHash = (0, helpers_1.authentication)((_b = user === null || user === void 0 ? void 0 : user.authentication) === null || _b === void 0 ? void 0 : _b.salt, password);
                if (((_c = user.authentication) === null || _c === void 0 ? void 0 : _c.password) !== expectedHash) {
                    return [2 /*return*/, res.sendStatus(403)];
                }
                salt = (0, helpers_1.random)();
                user.authentication.sessionToken = (0, helpers_1.authentication)(salt, user._id.toString());
                return [4 /*yield*/, user.save()];
            case 2:
                _d.sent();
                res.cookie("sessionToken", user.authentication.sessionToken, {
                    domain: "localhost",
                    path: "/",
                    httpOnly: true,
                });
                return [2 /*return*/, res.status(200).json(user).end()];
            case 3:
                error_1 = _d.sent();
                console.error(error_1);
                return [2 /*return*/, res.sendStatus(400)];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.login = login;
var register = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, email, password, username, existingUser, salt, user, error_2;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 3, , 4]);
                _a = req.body, email = _a.email, password = _a.password, username = _a.username;
                if (!email || !password || !username) {
                    return [2 /*return*/, res.sendStatus(400)];
                }
                return [4 /*yield*/, (0, users_1.getUserByEmail)(email)];
            case 1:
                existingUser = _b.sent();
                if (existingUser) {
                    return [2 /*return*/, res.sendStatus(400)];
                }
                salt = (0, helpers_1.random)();
                return [4 /*yield*/, (0, users_1.createUser)({
                        email: email,
                        username: username,
                        authentication: {
                            salt: salt,
                            password: (0, helpers_1.authentication)(salt, password),
                        },
                    })];
            case 2:
                user = _b.sent();
                return [2 /*return*/, res.status(200).json(user).end()];
            case 3:
                error_2 = _b.sent();
                console.error(error_2);
                return [2 /*return*/, res.sendStatus(400)];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.register = register;
//# sourceMappingURL=authentication.js.map