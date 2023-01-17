import { Sequelize } from 'sequelize';
import db from '../db.js';

export default db.define('cliente', {
    id_clientes: {
        type: Sequelize.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: true
    },
    telefone: {
        type: Sequelize.STRING,
        allowNull: true
    },
    whatsapp: {
        type: Sequelize.STRING,
        allowNull: true
    },
    endereco: {
        type: Sequelize.STRING,
        allowNull: true
    },
    endereco: {
        type: Sequelize.STRING,
        allowNull: true
    },
    cidade: {
        type: Sequelize.STRING,
        allowNull: true
    },
    cpf: {
        type: Sequelize.STRING,
        allowNull: true
    },
    rg: {
        type: Sequelize.STRING,
        allowNull: true
    },
    nascimento: {
        type: Sequelize.DATEONLY,
        allowNull: true
    },
    trabalho: {
        type: Sequelize.STRING,
        allowNull: true
    },
    pai: {
        type: Sequelize.STRING,
        allowNull: true
    },
    mae: {
        type: Sequelize.STRING,
        allowNull: true
    },
    referencia: {
        type: Sequelize.STRING,
        allowNull: true
    },
    email: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    facebook: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    instagram: {
        type: Sequelize.STRING,
        allowNull: true,
    },
})