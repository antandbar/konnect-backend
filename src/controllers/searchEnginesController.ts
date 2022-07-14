'use strict';

import { Request, Response, NextFunction } from 'express';
import { searchEnginesBo } from '../bos/SearchEnginesBo';
import { SearchEngine } from '../models/SearchEngine';

class SearchEnginesController {
  public async getSearchEngines(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    try {
      const searchEngines: SearchEngine[] =
        await searchEnginesBo.getsearchEngines();
      res.status(200).json({ results: searchEngines });
    } catch (error) {
      next(error);
    }
  }
}

export const searchEnginesController = new SearchEnginesController();
