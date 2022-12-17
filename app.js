const express = require('express');
const app = express();


app.set('view engine', 'ejs');
app.set('')

app.get('/', function(req, res){
    res.render('home/index')

})

app.get('/formulario_inclusao_noticias', function(req, res){
    res.render('admin/form_add_noticia')

})

app.get('/noticias', function(req, res){
    res.render('noticias/noticias')

})

app.listen(5000, function(){
    console.log("Servidor rodando com Sucesso!")
})
