'use strict';

import CommentSchema, { Comment } from '../models/Comment';

class CommentBo {
  public async getComments(): Promise<Comment[]> {
    const topics: Comment[] = await CommentSchema.findAll();

    return topics;
  }
}

export const commentBo = new CommentBo();