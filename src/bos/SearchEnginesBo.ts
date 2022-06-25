'use strict';

import BookModel, { SearchEngine } from '../models/SearchEngine';

class SearchEnginesBo {
  public async getsearchEngines(): Promise<SearchEngine[]> {
    const searchEngine: SearchEngine[] = await BookModel.find();

    return searchEngine;
  }


}

export const searchEnginesBo = new SearchEnginesBo();
