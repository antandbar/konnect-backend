import express, { Request, Response, NextFunction } from 'express';
const logger = require('morgan');
const createError = require('http-errors');
import path from 'path';
import 'dotenv/config';

// Routes
import BooksRoutes from './routes/books';
import TopicsRoutes from './routes/topics';
import SearchRoutes from './routes/search';


// Inicializaciones
const app = express();
require('./lib/connectMogoose');
require('./lib/connectPostgresql');

//Configuracionesa
app.set('port', process.env.PORT || 3000);

// Middelwares
app.use(logger('dev'));
'use strict';

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/apiv1/books', BooksRoutes);
app.use('/apiv1/topics', TopicsRoutes);
app.use('/apiv1/search', SearchRoutes);


// Estaticos
app.use(express.static(path.join(__dirname, 'public')));

// Arrancar el servidor
app.listen(app.get('port'), () => {
  console.log(`Server on port ${app.get('port')}`);
});

// catch 404 and forward to error handler
app.use(function (req: Request, res: Response, next: NextFunction) {
  next(createError(404));
});

// error handler
app.use(function (err: any, req: Request, res: Response, next: NextFunction) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // error
  res.status(err.status || 500);

  /* res.json('error'); */
  res.json({ error: err.message });
});
