
module.exports = function(app){
    app.get('/noticias', function(req, res){
        const mysql = require('mysql')
        var connection  = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'password',
            database : 'portal_noticias'
        });


        connection.query('SELECT * FROM noticias', (erro, resultado)=>{
            res.render('noticias/noticias', {noticias:resultado});
            
        })
        
           // res.render('noticias/noticias')
    })

    
}