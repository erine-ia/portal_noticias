

module.exports = function(app){
    app.get('/formulario_inclusao_noticias', function(req, res){
    res.render('admin/form_add_noticia')

})


 app.post('/noticias/salvar', function(req, res){
    const noticia = req.body

    //fazer conexão
    const connection = app.config.db();
    const noticiasModel = app.app.models.noticiasModel;

    noticiasModel.salvarNoticia(noticia, connection, function(err, resultado){
        res.redirect('/noticias')
    })


})
}