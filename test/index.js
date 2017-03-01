'use strict';

const chai = require('chai');
const expect = chai.expect;
chai.use(require('..'));

describe('chai-url', () => {

  describe('path', () => {

    it('matches paths on urls', () => {
      expect('http://example.com/foo/bar').to.have.path('/foo/bar');
    });

    it('does not match partial paths', () => {
      expect('http://example.com/foo/bar').not.to.have.path('/foo');
    });

    it('matches partial paths on urls if `contain` flag is present', () => {
      expect('http://example.com/foo/bar').to.contain.path('/foo');
    });

  });

  describe('hostname', () => {

    it('matches hostnames', () => {
      expect('http://example.com/foo/bar').to.have.hostname('example.com');
      expect('http://www.example.com/foo/bar').to.have.hostname('www.example.com');
    });

    it('does not match partial hostnames', () => {
      expect('http://www.example.com/foo/bar').not.to.have.hostname('example.com');
    });

    it('matches partial hostname on urls if `contain` flag is present', () => {
      expect('http://www.example.com/foo/bar').to.contain.hostname('example.com');
    });

  });

});