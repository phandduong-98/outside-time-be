import express from 'express';
import authentication from './authentication';
import users from './users';
import chapter from './chapter';
const router = express.Router();

export default (): express.Router => {
  authentication(router);
  users(router)
  chapter(router)
  return router;
}
