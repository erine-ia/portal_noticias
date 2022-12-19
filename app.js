const app = require('./config/server')
// const rotaNoticias = require('./app/routers/noticias')
// const rotaHome = require('./app/routers/home')
// const rotaFormulario = require('./app/routers/formulario_inclusao_noticias')


// rotaNoticias(app)
// rotaHome(app)
// rotaFormulario(app)


app.listen(5000, function(){
    console.log("Servidor rodando com Sucesso!")
})
