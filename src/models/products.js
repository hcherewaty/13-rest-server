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
  }

  delete(id) {
  }

  sanitize(entry) {
  }

}

module.exports = Products;
