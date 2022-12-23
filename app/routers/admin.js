

module.exports = function(app){
    app.get('/formulario_inclusao_noticias', function(req, res){
    res.render('admin/form_add_noticia', {validacao:{}, noticia:{}})

})



 app.post('/noticias/salvar', function(req, res){
    const noticia = req.body

    //validaçõa dos dados incluídos no formulario de noticias:
    req.assert('titulo','Titulo Obrigatório').notEmpty()
    req.assert('resumo','Resumo Obrigatório').notEmpty()
    req.assert('resumo','O resumo deve conter entre 10 e 100 caracteres').len(10, 100)
   
    req.assert('autor','Autor Obrigatório').notEmpty()
    req.assert('data_noticia','Data Obrigatória').notEmpty().isDate({format: 'YYYY-MM-DD'})
    req.assert('noticia','Noticias Obrigatório').notEmpty()

    var erros = req.validationErrors();

    if(erros){
        res.render('admin/form_add_noticia',{validacao: erros, noticia:noticia})
        return;
    }

    //fazer conexão
    const connection = app.config.db();
    const noticiasModel =new app.app.models.noticiasModel(connection);

    noticiasModel.salvarNoticia(noticia, function(err, resultado){
        res.redirect('/noticias')
    })


})
}