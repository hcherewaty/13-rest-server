'use strict';

const express = require('express');

const Categories = require('../models/categories.js');
const categories = new Categories();

const router = express.Router();

// ROUTES
router.get('/api/v1/categories', getCategories);
router.post('/api/v1/categories', postCategories);

router.get('/api/v1/categories/:id', getCategory);
router.put('/api/v1/categories/:id', putCategories);
router.delete('/api/v1/categories/:id', deleteCategories);

// FUNCTIONS
/**
 * @function getCategories - recieves an array of objects from categories model, sends results in json format
 *
 * @param {request} request
 * @param {response} response - array of objects from categories model
 * @param {next} next - calls next
 */
function getCategories(request,response,next) {
  // expects an array of object to be returned from the model
  categories.get()
    .then( data => {
      const output = {
        count: data.length,
        results: data,
      };
      response.status(200).json(output);
    })
    .catch( next );
}

/**
 * @function getCategory - receives an array of one matching record from model
 *
 * @param {request} request - requested category by id
 * @param {response} response - response array from model by id, results sent in json format
 * @param {next} next - calls next
 */
function getCategory(request,response,next) {
  // expects an array with the one matching record from the model
  categories.get(request.params.id)
    .then( result => response.status(200).json(result[0]) )
    .catch( next );
}

/**
 * @function postCategories - receives record of newly created category to database
 *
 * @param {request} request - newly created record
 * @param {*} response - response of newly created record, results sent in json format
 * @param {next} next - calls next
 */
function postCategories(request,response,next) {
  // expects the record that was just added to the database
  categories.post(request.body)
    .then( result => response.status(200).json(result) )
    .catch( next );
}


/**
 * @function putCategories - receives newly updated record from database
 *
 * @param {request} request - updated record by id
 * @param {response} response - response of newly updated record in database, results sent in json format
 * @param {next} next - calls next
 */
function putCategories(request,response,next) {
  // expects the record that was just updated in the database
  categories.put(request.params.id, request.body)
    .then( result => response.status(200).json(result) )
    .catch( next );
}

/**
 * @function deleteCategories - receives record to be deleted in database
 *
 * @param {request} request - record to be deleted by id in database
 * @param {response} response - expects no response as record was deleted
 * @param {next} next - calls next
 */
function deleteCategories(request,response,next) {
  // Expects no return value (resource was deleted)
  categories.delete(request.params.id)
    .then( result => response.status(200).json(result) )
    .catch( next );
}

module.exports = router;
