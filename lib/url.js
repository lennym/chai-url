'use strict';

const url = require('url');
const props = [
  'path',
  'pathname',
  'port',
  'hostname',
  'protocol',
  'auth',
  'hash'
];

module.exports = function (chai, utils) {
  const Assertion = chai.Assertion;

  props.forEach(prop => {
    Assertion.addMethod(prop, function (value) {
      const str = this._obj;

      // if url isn't a string we cannot continue
      new Assertion(str).to.be.a('string');

      const parsed = url.parse(str);
      const contains = utils.flag(this, 'contains');
      this.assert(
        contains ? parsed[prop].includes(value) : parsed[prop] === value,
        `expected #{this} to have ${prop} #{exp} but got #{act}`,
        `expected #{this} to not to have ${prop} #{act}`,
        value,
        parsed[prop]
      );
    });
  });
};
