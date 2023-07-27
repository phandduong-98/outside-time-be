import express from "express";

import { addChapter, getChapter } from "../controllers/chapter";
import { get } from "lodash";

export default (router: express.Router) => {
  router.post("/chapters/add", addChapter);
  router.get("/chapters/:chapter_number", getChapter);
};
