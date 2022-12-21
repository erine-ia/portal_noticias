module.exports = function(app){

    
    app.get('/noticias', function(req, res){
        const connection = app.config.db();
        const noticiasModel = new app.app.models.noticiasModel(connection);

        noticiasModel.getNoticias(function(erro, resultado){
            res.render('noticias/noticias', {noticias:resultado});
        })


     })  
}