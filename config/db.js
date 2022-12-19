const mysql = require('mysql')
const conmysql = function(){
    return mysql.createConnection({
           host: 'localhost',
           user: 'root',
           password: 'password',
           database : 'portal_noticias'
       });}

module.exports = function(){
       return conmysql
       
    }
       
