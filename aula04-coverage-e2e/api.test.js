const { describe, it } = require('mocha');
const request = require('supertest');
const app = require('./api');
const assert = require('assert');

describe('API Suite test', () => {
    describe('/contact', () => {
        it('should request the contact and return HTTP Status 200', async () => {
            const response = await request(app).get('/contact').expect(200);

            assert.deepStrictEqual(response.text, 'contact us page');
        });
    });
    describe('/hello', () => {
        it('should request an inexistent route /hi and redirect to /hello', async()=>{
            const response = await request(app).get('/hi').expect(200)

            assert.deepStrictEqual(response.text, 'Hello World!')
        })
    });
});
