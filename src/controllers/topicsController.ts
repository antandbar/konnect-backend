'use strict';

import { Request, Response } from 'express';
import { Topic } from '../models/Topic';
import { topicsBo } from '../bos/topicsBo'

class TopicsController {
  public async getTopics(req: Request, res: Response): Promise<void> {
    const topic: Topic[] = await topicsBo.getTopics();
    res.status(200).json({ results: topic });
  }

  public async saveTopic(req: Request, res: Response): Promise<void> {
    const { text } = req.body;

    const topic: Topic = await topicsBo.saveTopic(text);
    res.status(201).json({ result: topic });
  }
}

export const topicsController = new TopicsController();
