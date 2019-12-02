/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('reponse', {
    'id': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      comment: "null"
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
    'montant_finance': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      comment: "null"
    },
    'periodicite': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      comment: "null"
    },
    'taux_accepte': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      comment: "null"
    },
    'vr': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      comment: "null"
    }
  }, {
    tableName: 'reponse'
  });
};
