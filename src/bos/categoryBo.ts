'use strict';

import CategorySchema, { Category } from '../models/Category';

class CategoryBo {
  public async getCategory(): Promise<Category[]> {
    const topics: Category[] = await CategorySchema.findAll();

    return topics;
  }

  public async postCategory(data:any): Promise<Category[]> {
    const category: any = await CategorySchema.create(data);

    return category;
  }
}

export const categoryBo = new CategoryBo();