const Sequelize = require('sequelize');

const sequilize = require("/db");



const User = sequelize.define('users', {
    firstName: {
        type: Sequelize.STRING,
        required: true
    },

    lastName: {
        type: Sequelize.STRING,
        required: true
    },

    age: {
        type: Sequelize.STRING,
        required: true
    },

    email: {
        type: Sequelize.STRING,
        required: true
    }
});

modules.export = User;
