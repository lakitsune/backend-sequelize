const Sequelize = require("sequilize")//Importa o sequilize para o arquivo
const sequilize = require("/db");


//Cria os posts no BD
const Post = sequelize.define('posts', {
    title: {
        type: Sequelize.STRING
    },
    content: {
        type: Sequelize.TEXT
    }
});




module.exports = Post;
