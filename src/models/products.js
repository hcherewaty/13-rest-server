'use strict';

const uuid = require('uuid/v4');

const schema = {
  id: {required: true},
  name: {required: true},
  type: {required: true},

};

class Products {

  constructor() {
    this.database = [];
  }

  get(id) {
    // console.log(id);
    // let id = req.params.id;
    let response = id ? this.database.filter( record => record.id === id) : this.database;
    return response;
  }
  
  post(entry) {
    entry.id = uuid();
    let record = this.sanitize(entry);
    if(record.id) {
      this.database.push(record);
    }
    return record;
  }

  put(id, entry) {
    let id = req.params.id;
    database = database.map( (record) => (record.id === parseInt(id)) ? entry: record );
  }

  delete(id) {
    let id = parseInt(req.params.id);
    database = database.filter( (record,idx) => record.id !== id);
  }

  sanitize(data) {
    let valid = true;
    let record = {};

    for (let key in schema) {
      if(schema[key].required) {
        if(data[key]) {
          record[key] = data[key];
        } else {
          valid = false;
        }
      } else {
        record[key] = data[key];
      }
    }
    return valid ? record : undefined;
  }
}

module.exports = Products;
