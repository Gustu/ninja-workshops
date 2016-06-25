/* global describe, it */
const chai = require('chai');
const chaiHttp = require('chai-http');
const {expect} = chai;
const app = require('../../bin');

chai.use(chaiHttp);

describe('sth', () => {
  it('sth else', done => {
    chai.request(app)
      .get('/')
      .then(function (response) {
        expect(response).to.have.status(200);
        done();
      });
  })
});
