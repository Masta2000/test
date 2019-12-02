const Sequelize = require('sequelize');
const sequelize = require('../config/config');

const Demande = sequelize.define('Demande', {
  id: {
    type: Sequelize.INTEGER(11),
    allowNull: false,
    primaryKey: true
  },
  statut: {
    type: Sequelize.ENUM('ok','refuser'),
    allowNull: false
  },
  millesime: {
    type: Sequelize.INTEGER(11),
    allowNull: false
  },
  client: {
    type: Sequelize.STRING(255),
    allowNull: false
  },
  siren: {
    type: Sequelize.INTEGER(9),
    allowNull: false
  },
  montant: {
    type: Sequelize.INTEGER(11),
    allowNull: false
  },
  periodicite: {
    type: Sequelize.STRING(255),
    allowNull: false
  },
  debut_contrat: {
    type: Sequelize.DATE,
    allowNull: false
  },
  duree_contrat: {
    type: Sequelize.INTEGER(11),
    allowNull: false
  },
  type_contrat: {
    type: Sequelize.STRING(255),
    allowNull: false
  },
  encours: {
    type: Sequelize.INTEGER(11),
    allowNull: false
  },
  taux_reference: {
    type: Sequelize.INTEGER(11),
    allowNull: false
  },
  nombre_barriques: {
    type: Sequelize.INTEGER(11),
    allowNull: false
  },
  refinanceur: {
    type: Sequelize.STRING(255),
    allowNull: true
  }
});

module.exports = Demande;

