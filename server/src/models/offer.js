'use strict';
module.exports = function(sequelize, DataTypes) {
  var Offer = sequelize.define('Offer', {
    title: DataTypes.STRING,
    content: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Offer;
};