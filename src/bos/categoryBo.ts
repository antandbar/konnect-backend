'use strict';

import CategorySchema, { Category } from '../models/Category';

class CategoryBo {
  public async getCategory(): Promise<Category[]> {
    const topics: Category[] = await CategorySchema.findAll();

    return topics;
  }
}

export const categoryBo = new CategoryBo();