"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUserById = exports.updateUserById = exports.createUser = exports.getUserById = exports.getUserBySessionToken = exports.getUserByEmail = exports.getUsers = exports.UserModel = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
var UserSchema = new mongoose_1.default.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    authentication: {
        password: { type: String, required: true, select: false },
        salt: { type: String, select: false },
        sessionToken: { type: String, select: false },
    },
});
exports.UserModel = mongoose_1.default.model("User", UserSchema);
var getUsers = function () {
    return exports.UserModel.find(); // Returns a query
};
exports.getUsers = getUsers;
var getUserByEmail = function (email) { return exports.UserModel.findOne({ email: email }); };
exports.getUserByEmail = getUserByEmail;
var getUserBySessionToken = function (sessionToken) {
    return exports.UserModel.findOne({ "authentication.sessionToken": sessionToken });
};
exports.getUserBySessionToken = getUserBySessionToken;
var getUserById = function (id) { return exports.UserModel.findById(id); };
exports.getUserById = getUserById;
var createUser = function (values) { return new exports.UserModel(values).save().then(function (user) { return user.toObject(); }); };
exports.createUser = createUser;
var updateUserById = function (id, values) { return exports.UserModel.findByIdAndUpdate(id, values); };
exports.updateUserById = updateUserById;
var deleteUserById = function (id) { return exports.UserModel.findByIdAndDelete({ _id: id }); };
exports.deleteUserById = deleteUserById;
//# sourceMappingURL=users.js.map