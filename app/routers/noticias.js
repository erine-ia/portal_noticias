module.exports = function(app){

    
    app.get('/noticias', function(req, res){
        const connection = app.config.db();
        connection.query('SELECT * FROM noticias', (erro, resultado)=>{
             res.render('noticias/noticias', {noticias:resultado});
            
         })
     })  
}