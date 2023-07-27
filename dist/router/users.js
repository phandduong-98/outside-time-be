"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var users_1 = require("../controllers/users");
var middlewares_1 = require("../middlewares");
exports.default = (function (router) {
    router.get("/users", middlewares_1.isAuthenticated, users_1.getAllUsers);
});
//# sourceMappingURL=users.js.map