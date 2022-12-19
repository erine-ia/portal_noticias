const app = require("../../config/server")

module.exports = function(app){

    app.get('/noticia', function(req, res){
        const connection = app.config.db();
        const noticiaModel = app.app.models.noticiasModel


      noticiaModel.getNoticia(connection, function(erro, resultado){
            res.render('noticias/noticia', { noticia: resultado})
        })
    })
}