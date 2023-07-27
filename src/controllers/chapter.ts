import { createChapter, getChapterByChapterNumber } from "../db/chapter";
import express from "express";

export const addChapter = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { content, id, story_id, chapter_number, time_edit } = req.body;
    if (!content || !story_id || !chapter_number) {
      return res.sendStatus(400);
    }
    const existingChapter = await getChapterByChapterNumber(chapter_number);

    if (existingChapter) {
      return res.sendStatus(400);
    }

    const chapter = await createChapter({
      content,
      id,
      story_id,
      chapter_number,
      time_edit,
    });
    return res.status(200).json(chapter).end();
  } catch (error) {
    console.error(error);
    return res.sendStatus(400);
  }
};

export const getChapter = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    if (!req.params.chapter_number) return res.sendStatus(400);

    const chapter = await getChapterByChapterNumber(
      Number(req.params.chapter_number)
    );
    return res.status(200).json(chapter);
  } catch (error) {
    console.error(error);
    return res.sendStatus(400);
  }
};

