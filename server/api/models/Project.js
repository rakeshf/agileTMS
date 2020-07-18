/**
 * Project.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    projectName: {
      type: 'string',
      required: true,
    },

    user: {
      collection: 'user',
      via: 'project',
      through: 'UserProject',
    },

    testSuite: {
      collection: 'testSuite',
      via: 'project',
      through: 'ProjectTestSuite',
    },
  },
  tableName: 'projects',
};
