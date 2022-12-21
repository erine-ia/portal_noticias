const app = require("../../config/server")

module.exports = function(app){

    app.get('/noticia', function(req, res){
        const connection = app.config.db();
        const noticiaModel = new app.app.models.noticiasModel(connection)


      noticiaModel.getNoticia(function(erro, resultado){
            res.render('noticias/noticia', { noticia: resultado})
        })
    })
}