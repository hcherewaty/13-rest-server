'use strict';

const express = require('express');

const Products = require('../models/products.js');
const products = new Products();

const router = express.Router();

// ROUTES
router.get('/api/v1/products', getProducts);
router.post('/api/v1/products', postProducts);

router.get('/api/v1/products/:id', getProduct);
router.put('/api/v1/products/:id', putProducts);
router.delete('/api/v1/products/:id', deleteProducts);

// FUNCTIONS
/**
 * @function getProducts - recieves an array of objects from products model, sends results in json format
 *
 * @param {request} request
 * @param {response} response - array of objects from products model
 * @param {next} next - calls next
 */
function getProducts(request,response,next) {
  // expects an array of objects back
  products.get()
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
 * @function getProduct - receives an array of one matching record from model
 *
 * @param {request} request - requested product by id
 * @param {response} response - response array from model by id, results sent in json format
 * @param {next} next - calls next
 */
function getProduct(request,response,next) {
  // expects an array with one object in it
  products.get(request.params.id)
    .then( result => response.status(200).json(result) )
    .catch( next );
}

/**
 * @function postProducts - receives record of newly created product to database
 *
 * @param {request} request - newly created record
 * @param {*} response - response of newly created record, results sent in json format
 * @param {next} next - calls next
 */
function postProducts(request,response,next) {
  // expects the record that was just added to the database
  products.post(request.body)
    .then( result => response.status(200).json(result) )
    .catch( next );
}


/**
 * @function putProducts - receives newly updated record from database
 *
 * @param {request} request - updated record by id
 * @param {response} response - response of newly updated record in database, results sent in json format
 * @param {next} next - calls next
 */
function putProducts(request,response,next) {
  // expects the record that was just updated in the database
  products.put(request.params.id, request.body)
    .then( result => response.status(200).json(result) )
    .catch( next );
}

/**
 * @function deleteProducts - receives record to be deleted in database
 *
 * @param {request} request - record to be deleted by id in database
 * @param {response} response - expects no response as record was deleted
 * @param {next} next - calls next
 */
function deleteProducts(request,response,next) {
  // Expects no return value (the resource should be gone)
  products.delete(request.params.id)
    .then( result => response.status(200).json(result[0]) )
    .catch( next );
}

module.exports = router;
