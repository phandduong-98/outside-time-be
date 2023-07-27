"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chapter_1 = require("../controllers/chapter");
exports.default = (function (router) {
    router.post("/chapters/add", chapter_1.addChapter);
    router.get("/chapters/:chapter_number", chapter_1.getChapter);
});
//# sourceMappingURL=chapter.js.map