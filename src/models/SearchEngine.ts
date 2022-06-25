'use strict';
import mongoose, { Schema, model } from 'mongoose';

export interface SearchEngine extends mongoose.Document {
  search: string;
  language: string;
  num: number;
  start: number;
  location: string;
  safe: string;
  userName: string;
}

const SearchEngineSchema = new Schema({
  search: {type: String, maxlength:50, required:true},
  language: {type: String, maxlength:50, required:true, index: true},
  num: Number,
  start: Number,
  location: {type: String, maxlength:50, required:true, index: true},
  safe: {type: String, maxlength:50},
  userName: {type: String, maxlength:20, required:true, index: true},
});

export default model<SearchEngine>('searchEngine', SearchEngineSchema);
