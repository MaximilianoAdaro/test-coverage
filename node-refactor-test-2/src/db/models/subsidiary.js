'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Subsidiary extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Company, {
        foreignKey: 'company_id',
        as: 'company',
      });

      this.belongsTo(models.Country, {
        foreignKey: 'country_id',
        as: 'country',
      });

      this.hasMany(models.Listing, {
        foreignKey: 'subsidiary_id',
        as: 'listings',
      });

      this.hasMany(models.User, {
        foreignKey: 'subsidiary_id',
        as: 'users',
      });
    }
  }

  Subsidiary.init(
    {
      name: DataTypes.STRING,
      logo: DataTypes.STRING,
      country_id: DataTypes.INTEGER,
      company_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Subsidiary',
      tableName: 'subsidiaries',
    },
  );
  return Subsidiary;
};
