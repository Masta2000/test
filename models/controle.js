/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('controle', {
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
    'statut': {
      type: DataTypes.ENUM('ok','refuser'),
      allowNull: false,
      comment: "null"
    },
    'document_manquant': {
      type: DataTypes.JSON,
      allowNull: true,
      comment: "null"
    },
    'motif_refus': {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "null"
    }
  }, {
    tableName: 'controle'
  });
};
