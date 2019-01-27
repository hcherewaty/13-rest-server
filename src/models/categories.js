'use strict';

const categoriesModel = require('./category-schema.js')

/**
 *
 *
 * @class Categories - class representing categories routes
 */
class Categories {

  constructor() {
  }

  get(_id) {
    let queryObject = _id ? {_id} : {};
    return categoriesModel.find(queryObject);
  }
  
  post(record) {
    let newRecord = new categoriesModel(record);
    return newRecord.save();
  }

  put(_id, record) {
    categoriesModel.findByIdAndUpdate(_id, record);
    
  }

  delete(_id) {
    categoriesModel.findByIdAndDelete(_id);
  }

}

module.exports = Categories;
