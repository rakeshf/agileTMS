/**
 * User.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    firstName: {
      type: 'string',
      required: true,
    },

    lastName: {
      type: 'string',
      required: true,
    },

    emailAddress: {
      type: 'string',
      description: 'The email address for this user.',
      required: true,
      unique: true,
      isEmail: true,
      maxLength: 200,
      example: 'eric@reveo.com',
    },

    password: {
      type: 'string',
      description: "Securely hashed representation of the user's login password.",
      protect: true,
    },

    resetPasswordToken: {
      type: 'string',
    },

    resetPasswordTokenExpiresAt: {
      type: 'number',
    },

    emailConfirmToken: {
      type: 'string',
    },

    emailConfirmExpiresAt: {
      type: 'number',
    },

    status: {
      type: 'string',
      isIn: ['unconfirmed', 'changeRequested', 'confirmed', 'blocked'],
      defaultsTo: 'unconfirmed',
    },

    rememberMe: {
      type: 'boolean',
      defaultsTo: false,
    },

    jwt: {
      type: 'string',
    },

    project: {
      collection: 'project',
      via: 'user',
      through: 'UserProject',
    },
  },
  tableName: 'users',
  customToJSON: function() {
    return _.omit(this, [
      'password',
      'status',
      'resetPasswordToken',
      'resetPasswordTokenExpiresAt',
      'emailConfirmToken',
      'emailConfirmExpiresAt',
    ]);
  },
};
