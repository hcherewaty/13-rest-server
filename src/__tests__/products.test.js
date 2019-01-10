'use strict';

const Products = require('../models/products.js');
const supertest = require('supertest');
const {server} = require('..//server.js');
const mockRequest = supertest(server);

describe('Products schema and routes', () => {

  it('should respond with a 500 on an error', () => {

    return mockRequest
      .get('/foo')
      .then(results => {
        expect(results.status).toBe(500);
      }).catch(console.error);

  });
  
  it('should respond with a 404 on an invalid route', () => {

    return mockRequest
      .get('/foobar')
      .then(results => {
        expect(results.status).toBe(404);
      }).catch(console.error);

  });

  it('should respond with a 404 on an invalid method', () => {

    return mockRequest
      .post('/')
      .then(results => {
        expect(results.status).toBe(404);
      }).catch(console.error);

  });

  it('should respond properly on request to /api/v1/categories', () => {

    return mockRequest
      .get('/api/v1/categories')
      .then(results => {
        expect(results.status).toBe(200);
      }).catch(console.error);

  });

  it('should respond properly on request to /api/v1/products', () => {

    return mockRequest
      .get('/api/v1/products')
      .then(results => {
        expect(results.status).toBe(200);
      }).catch(console.error);

  });

});