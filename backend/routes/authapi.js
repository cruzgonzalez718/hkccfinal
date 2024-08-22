const router = require('express').Router();
const { getEmail, putLoginCredentials, getLoginCredentials } = require('../database/authDB');

router.post("/register", async (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    
    await getEmail(name, email, password)
      .then(async (result) => {
        if (result.length == 0) {
          return res.status(400).send({message: "Registration Unsuccessful"});
        }
        // put credentials into database
        await putLoginCredentials(name, email, password)
          .then((result) => {
            if (result) {
              res.status(200).send({message: "Registration Successful"});
            }
            res.status(500).send({err: "Registration Error", msg: "Error in inserting data"});
          })
          .catch((err) => {
            res.status(500).send({err: "Registration Error", msg: err});
          })
      })
      .catch((err) => {
        return res.status(500).send({err: "Registration Error", msg: err});
      });
}); 


router.post("/login", async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

  await getLoginCredentials(email, password)
    .then((result) => {
      if (result) {
        res.status(200).send({message: "Login Successful"});
      }
      res.status(401).send({message: "Invalid User"});
    })
    .catch((err) => {
      res.status(500).send({err: "Login Error", msg: err});
    });
}); 

module.exports = router;
