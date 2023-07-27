"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var authentication_1 = require("../controllers/authentication");
exports.default = (function (router) {
    router.post('/auth/register', authentication_1.register);
    router.post('/auth/login', authentication_1.login);
});
//# sourceMappingURL=authentication.js.map