'use strict';

import TopicSchema, { Topic } from '../models/Topic';

class TopicsBo {
  public async getTopics(): Promise<Topic[]> {
    const topics: Topic[] = await TopicSchema.findAll();

    return topics;
  }

  public async saveTopic(text: string): Promise<Topic> {
    const topic: Topic = await TopicSchema.create({ text: text });
    return topic;
  }
}

export const topicsBo = new TopicsBo();
