/**
 * TestSuite.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    suiteTitle: {
      type: 'string',
      required: true,
    },
    project: {
      collection: 'project',
      via: 'testSuite',
      through: 'ProjectTestSuite',
    },
    testCase: {
      collection: 'testCase',
      via: 'testSuite',
      through: 'TestSuiteTestCase',
    },
  },
  tableName: 'test_suites',
};
