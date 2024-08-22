const router = require('express').Router();
const { getEmail, getUsername, putLoginCredentials, getLoginCredentials } = require('../database/authDB');

router.post("/register", async (req, res) => {
    const name = req.body.name;
    const username = req.body.username;

    const email = req.body.email;
    const password = req.body.password;
 

    try {
        const result = await getEmail(email);
        console.log("getEmail result:", result);

        if (result.length !== 0) {
            return res.status(400).send({ message: "Registration Unsuccessful" });
        }

        const result2 = await getUsername(username);
        console.log("getUsername result:", result2);

        if (result2.length !== 0) {
            return res.status(400).send({ message: "Registration Unsuccessful" });
        }


        const insertResult = await putLoginCredentials(name, username, email, password);
        console.log("putLoginCredentials result:", insertResult);

        if (insertResult) {
            return res.status(200).send({ message: "Registration Successful" });
        } else {
            return res.status(500).send({ err: "Registration Error", msg: "Error in inserting data" });
        }
    } catch (err) {
        console.error("Error during registration:", err);
        return res.status(500).send({ err: "Registration Error", msg: err.message });
    }

}); 


router.post("/login", async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    try {
        const result = await getLoginCredentials(email, password);
        console.log("getLoginCredentials result:", result);

        if (result.length > 0) {
            return res.status(200).send({ message: "Login Successful" });
        } else {
            return res.status(401).send({ message: "Invalid User" });
        }
    } catch (err) {
        console.error("Error during login:", err);
        return res.status(500).send({ err: "Login Error", msg: err.message });
    }
}); 

module.exports = router;
