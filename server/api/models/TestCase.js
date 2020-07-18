/**
 * TestCase.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    testTitle: {
      type: 'string',
      required: true,
    },
    description: {
      type: 'string',
      required: true,
    },
    testSuite: {
      collection: 'testSuite',
      via: 'testCase',
      through: 'TestSuiteTestCase',
    },
  },
  tableName: 'test_case',
};
