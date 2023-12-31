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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var chapter_1 = require("../db/chapter");
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
// MongoDB connection URL
var dbUrl = process.env.MONGO_URL;
var addedChapterId = [];
var Source = [];
// Function to connect to MongoDB
var connectToDatabase = function () { return __awaiter(void 0, void 0, void 0, function () {
    var error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, mongoose_1.default.connect(dbUrl)];
            case 1:
                _a.sent();
                console.log("Connected to MongoDB");
                return [3 /*break*/, 3];
            case 2:
                error_1 = _a.sent();
                console.error("Error connecting to MongoDB:", error_1);
                process.exit(1);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
// Function to import data into MongoDB
var importData = function () { return __awaiter(void 0, void 0, void 0, function () {
    var _i, Source_1, item, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 6, , 7]);
                // Connect to the database
                return [4 /*yield*/, connectToDatabase()];
            case 1:
                // Connect to the database
                _a.sent();
                _i = 0, Source_1 = Source;
                _a.label = 2;
            case 2:
                if (!(_i < Source_1.length)) return [3 /*break*/, 5];
                item = Source_1[_i];
                if (!!addedChapterId.includes(item.chapter_number)) return [3 /*break*/, 4];
                return [4 /*yield*/, chapter_1.ChapterModel.create(item)];
            case 3:
                _a.sent();
                addedChapterId.push(item.chapter_number);
                console.log("Inserted:", item.chapter_number);
                _a.label = 4;
            case 4:
                _i++;
                return [3 /*break*/, 2];
            case 5:
                console.log(addedChapterId.length);
                console.log("Data import completed!");
                process.exit();
                return [3 /*break*/, 7];
            case 6:
                error_2 = _a.sent();
                console.error("Error importing data:", error_2);
                process.exit(1);
                return [3 /*break*/, 7];
            case 7: return [2 /*return*/];
        }
    });
}); };
// Run the data import function
importData();
//# sourceMappingURL=importData.js.map