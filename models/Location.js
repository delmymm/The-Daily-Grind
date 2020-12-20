const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Location extends Model {}

Location.init(
  {
    store_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    street_address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    state_and_zip: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    website: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    location_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'location',
          key: 'id',
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'location',
  }
);

module.exports = Location;
