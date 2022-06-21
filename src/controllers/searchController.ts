'use strict';

import { Request, Response } from 'express';
const SerpApi = require('google-search-results-nodejs') ;

class SearchController {

    public getSearch(req: Request, res: Response) {

      try {
        const search = new SerpApi.GoogleSearch("840f7c951682e49f6871db37aea9625a5c4d7c209860e9503630f52225e3a83c");
  
          search.json({
              engine: "google",
              q: req.body.name,
              hl: "es",
              num: "10",
              start: "10",
              location: "Cádiz, Cádiz",
              safe: "active",
          }, function (data:any){
          
          console.log(data["organic_results"]);
          
          res.status(200).json({ results: data });
      });
        
      } catch (error) {
        console.log(error)
        res.status(404).json({ error });
        
      }

  }

}

export const searchController = new SearchController();
