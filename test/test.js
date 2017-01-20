/*
 * Learning BDD using Mocha
 * https://mochajs.org/
 */

const app = require('../app.js')
  ,request = require('supertest')  // used for HTTP testing

describe('GET /', () => {
  it('should return 200 OK', (done) => {
    request(app)
      .get('/')
      .expect(200, done)
  })
})
