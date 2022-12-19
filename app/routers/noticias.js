module.exports = function(app){

    
    app.get('/noticias', function(req, res){
        const connection = app.config.db();
        const noticiasModel = app.app.models.noticiasModel;

        noticiasModel.getNoticias(connection, function(erro, resultado){
            res.render('noticias/noticias', {noticias:resultado});
        })


     })  
}