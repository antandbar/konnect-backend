'use strict';

import { Request, Response } from 'express';
import { Comment } from '../models/Comment';
import { commentBo } from '../bos/commentsBo';

class CommentsController {
  public async getComments(req: Request, res: Response): Promise<void> {
    const comments: Comment[] = await commentBo.getComments();
    res.status(200).json({ results: comments });
  }
}

export const commentsController = new CommentsController();
