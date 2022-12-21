function Noticias(connection){
         this._connection = connection
}

Noticias.prototype.getNoticias = function(callback)
{
 this._connection.query('SELECT * FROM noticias', callback);
}


Noticias.prototype.getNoticia = function(callback)
{
 this._connection.query('SELECT * FROM noticias where id_noticias= 2', callback);
}


Noticias.prototype.salvarNoticia =
function(noticia, callback){
   this._connection.query('Insert into noticias set ?', noticia, callback)
}


module.exports = function(){

    return Noticias;

}