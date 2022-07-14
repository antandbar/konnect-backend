'use strict';

import { Request, Response, NextFunction } from 'express';
import { Comment } from '../models/Comment';
import { commentBo } from '../bos/commentsBo';

class CommentsController {
  public async getComments(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    try {
      const comments: Comment[] = await commentBo.getComments();
      res.status(200).json({ results: comments });
    } catch (error) {
      next(error);
    }
  }
}

export const commentsController = new CommentsController();
