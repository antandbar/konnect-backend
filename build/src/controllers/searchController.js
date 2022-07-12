'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchController = void 0;
const SerpApi = require('google-search-results-nodejs');
class SearchController {
    getSearch(req, res) {
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
            }, function (data) {
                console.log(data["organic_results"]);
                res.status(200).json({ results: data });
            });
        }
        catch (error) {
            console.log(error);
            res.status(404).json({ error });
        }
    }
}
exports.searchController = new SearchController();
