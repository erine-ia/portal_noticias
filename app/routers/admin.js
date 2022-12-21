

module.exports = function(app){
    app.get('/formulario_inclusao_noticias', function(req, res){
    res.render('admin/form_add_noticia')

})



 app.post('/noticias/salvar', function(req, res){
    const noticia = req.body

    //fazer conexão
    const connection = app.config.db();
    const noticiasModel =new app.app.models.noticiasModel(connection);

    noticiasModel.salvarNoticia(noticia, function(err, resultado){
        res.redirect('/noticias')
    })


})
}