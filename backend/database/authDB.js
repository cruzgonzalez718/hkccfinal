const mysql = require('mysql2');

const db = mysql.createPool({
    host: "localhost",
    user: "teamos", //change to root on local
    password: "password",
    database: "teamos"
});



async function getEmail(email) {
    const sqlQuery1 = "SELECT * FROM userinfo WHERE email = ?";
    db.query(sqlQuery1, [email], (err, result) => {
        if(err){
            throw new Error(err);      // check if this works, may need to throw an exception
        }
        return result;
    });
}

async function putLoginCredentials(name, email, password) {
    const sqlQuery2 = "INSERT INTO userinfo (name, email, password) VALUES (?,?,?)";
    db.query(sqlQuery2, [name, email, password], (err, result) => {
        if(err){
            throw new Error(err);
        } 
        return result;
    });
}

async function getLoginCredentials(email, password) {
    const sqlQuery = 'SELECT * FROM userinfo WHERE email = ? AND password = ?';
    db.query(sqlQuery, [email, password], (err, result) => { // later modify to only query email, then check if pw == pw, and have only max 1 email/acc
        if(err){
            throw new Error(err);
        }
        return result;
    })
}
module.exports = { getEmail, putLoginCredentials, getLoginCredentials };
//export { getEmail, putLoginCredentials, getLoginCredentials };
