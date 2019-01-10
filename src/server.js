'use strict';

const express = require('express');
const uuid = require('uuid');

const app = express();

const PORT = process.env.PORT || 8080;

let db = [];

app.use(express.json());

app.use( (req,res,next) => {
  console.log('LOG:', req.method, req.path);
  next();
});

//categories route
app.get('/categories', (req,res,next) => {
  let count = db.length;
  let results = db;
  res.json({count,results});
});

app.get('/categories/:id', (req,res,next) => {
  let id = req.params.id;
  let record = db.filter((record) => record.id === parseInt(id));
  res.json(record[0]);
});


app.post('/categories', (req,res,next) => {
  let {name,type,id} = req.body;
  let newRecord = new CategoryFormatter(name, type, uuid());
  console.log(newRecord);
  db.push(newRecord);
  res.json(newRecord);
});

app.put('/categories/:id', (req,res,next) => {
  let id = req.params.id;
  let {name,type} = req.body;
  let update = {name,type};
  db = db.map( (record) => (record.id === parseInt(id)) ? update: record );
  res.json(update);
});

app.delete('/categories/:id', (req,res,next) => {
  console.log('delete me!');
  let id = parseInt(req.params.id);
  db = db.filter( (record,idx) => record.id !== id );
  res.json({});
});

class CategoryFormatter {
  constructor(name, type, id) {
    this.name = name,
    this.type = type,
    this.id = id;
  }
}

//products route
app.get('/products', (req,res,next) => {
    let count = db.length;
    let results = db;
    res.json({count,results});
  });
  
  app.get('/products/:id', (req,res,next) => {
    let id = req.params.id;
    let record = db.filter((record) => record.id === parseInt(id));
    res.json(record[0]);
  });
  
  
  app.post('/products', (req,res,next) => {
    let {name,type,id} = req.body;
    let newRecord = new ProductFormatter(name, type, uuid());
    console.log(newRecord);
    db.push(newRecord);
    res.json(newRecord);
  });
  
  app.put('/products/:id', (req,res,next) => {
    let id = req.params.id;
    let {name,type} = req.body;
    let update = {name,type};
    db = db.map( (record) => (record.id === parseInt(id)) ? update: record );
    res.json(update);
  });
  
  app.delete('/products/:id', (req,res,next) => {
    console.log('delete me!');
    let id = parseInt(req.params.id);
    db = db.filter( (record,idx) => record.id !== id );
    res.json({});
  });
  
  class ProductFormatter {
    constructor(name, type, id) {
      this.name = name,
      this.type = type,
      this.id = id;
    }
  }

module.exports = {
  server: app,
  start: port => {
    let PORT = port || process.env.PORT || 8080;
    app.listen(PORT, () => console.log(`Listening on ${PORT}`));
  },
};
