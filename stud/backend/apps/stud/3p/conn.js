const mysql = require('mysql');

var conn = mysql.createConnection({
    host: "localhost",
    user: "sujit",
    password: "Papa@794128",
    database: "stud",
    multipleStatements: true
}) 

conn.connect((err)=> {
    if(!err) 
        console.log("db connected");
    else
        console.log("db not connected");
})

conn.query("select * from student where roll=1", (err, rows, fields) => {
   if(!err) {
      console.log(rows)
    }
    else 
      console.log(err)
 })

module.exports = conn;