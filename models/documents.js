/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('documents', {
    'id': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      primaryKey: true,
      comment: "null",
      autoIncrement: true
    },
    'demande_id': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      comment: "null",
      references: {
        model: 'demandes',
        key: 'id'
      }
    },
    'nom': {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "null"
    },
    'lien': {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "null"
    }
  }, {
    tableName: 'documents'
  });
};
