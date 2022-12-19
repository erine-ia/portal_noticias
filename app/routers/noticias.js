const dbConnection = require('../../config/db')
module.exports = function(app){
    const connection = dbConnection()
    app.get('/noticias', function(req, res){

        connection.query('SELECT * FROM noticias', (erro, resultado)=>{
            res.render('noticias/noticias', {noticias:resultado});
            
        })
    })  
}