module.exports = function(){
    this.getNoticias = function(connection, callback)
       {
        connection.query('SELECT * FROM noticias', callback);
       }

    this.getNoticia = function(connection, callback)
       {
        connection.query('SELECT * FROM noticias where id_noticias= 2', callback);
       }

      this.salvarNoticia = function(noticia, connection, callback){
         connection.query('Insert into noticias set ?', noticia, callback)
      }

    return this;

}