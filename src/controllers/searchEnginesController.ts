'use strict';

import { Request, Response } from 'express';
import { searchEnginesBo } from '../bos/SearchEnginesBo';
import { SearchEngine } from '../models/SearchEngine';

class SearchEnginesController {
  public async getSearchEngines(req: Request, res: Response): Promise<void> {
    const searchEngines: SearchEngine[] = await searchEnginesBo.getsearchEngines();
    res.status(200).json({ results: searchEngines });
  }

}

export const searchEnginesController = new SearchEnginesController();
