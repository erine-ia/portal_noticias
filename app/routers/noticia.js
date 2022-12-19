const app = require("../../config/server")

module.exports = function(app){

    app.get('/noticia', function(req, res){
        const connection = app.config.db();
        connection.query('SELECT * FROM noticias WHERE id_noticias = 2', function(erro, resultado){
            res.render('noticias/noticia', { noticia: resultado})
        })
    })
}