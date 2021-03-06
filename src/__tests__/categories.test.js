'use strict';

const rootDir = process.cwd();
const Categories = require(`${rootDir}/src/models/categories.js`);

const supergoose = require('./supergoose.js');

beforeAll(supergoose.startDB);
afterAll(supergoose.stopDB);

describe('Categories model', () => {
    it('can post() a new category', () => {
        let obj = {name: 'Cool category', type: 'Super cool'};
        let categories = new Categories();
        return categories.post(obj)
        .then( record => {
            Object.keys(obj).forEach(key => {
                expect(record[key]).toEqual(obj[key]);
            });
        });
    });

    it('can delete() a category', () => {
        let obj = {name: 'Cool category', type: 'Super cool'};
        let categories = new Categories();
        let expected = categories.delete(obj)
        expect(expected).toBeUndefined();
    });

    // it('can get() a category', () => {
    //     let obj = {_id: 'xyz', name: 'Cool category', type: 'Super cool'};
    //     let categories = new Categories();
    //     return categories.get(obj)
    //     .then( record => {
    //         Object.keys(obj).forEach(key => {
    //             expect(record[ObjectId]).toEqual(obj[ObjectId]);
    //         });
    //     });
    // });

    // it('can put() an update for a category', () => {
    //     let obj = {name: 'Cool category', type: 'Super cool'};
    //     let categories = new Categories();
    //     return categories.put(obj)
    //     .then( record => {
    //         Object.keys(obj).forEach(key => {
    //             expect(record[key]).toEqual(obj[key]);
    //         });
    //     });
    // });
});