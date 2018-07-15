const chai = require('chai');
const chaiHttp = require('chai-http');

// Import server.js and use destructuring assignment to create variables for
// server.app, server.runServer, and server.closeServer
const server = require('../server');

// declare a variable for expect from chai import
const expect = chai.expect;

chai.use(chaiHttp);

describe('server', function() {

  it('should have status 200', function() {
    expect('../').to.have.status(200);
  });
});