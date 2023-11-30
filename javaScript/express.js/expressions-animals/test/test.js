console.log = () => {};
const rewire = require('rewire');
const expect = require('chai').expect;
const request = require('supertest');

describe('', function() {
  it('', function(done) {
    process.env.PORT = 8000;
    const appModule = rewire('../app.js');
    const app = appModule.__get__('app');
    const expressions = appModule.__get__('animals');
    request(app)
    .get('/animals')
    .then((response) => {
      expect(response.status, 'Did you send a response from the GET /animals route?').to.equal(200);
      expect(response.body, 'Did you send back the animals array?').to.deep.equal(expressions);
      done();
    })
    .catch(done);
  });
});
