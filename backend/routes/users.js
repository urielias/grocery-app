const express = require("express");
const router = express.Router();
const { queryPromise, cypher, decypher } = require("../helpers");

router.post("/login", async (req, res) => {
    const { identity, password } = req.body;
    const query = `SELECT * FROM Users WHERE username='${identity}' OR email='${identity}'`;
    let user_data;

    try {
        user_data = await queryPromise(query, "get");
    } catch (err) {
        console.error("Unable to get cypher key", err);
        res.status(500).send("Error logging in");
        return;
    }

    const { id, cypher_key, cyphered_pass } = user_data;

    if (password === decypher(cyphered_pass, cypher_key)) {
        res.status(200).json({ user_id: id });
    } else {
        res.status(401).send("Incorrect username/email/password");
    }
});

router.post("/signup", async (req, res) => {
    const { email, username, password } = req.body;
    const [cypher_key, cyphered_pass] = cypher(password);
    const query = `INSERT INTO Users (email, username, cypher_key, cyphered_pass) VALUES ("${email}", "${username}", "${cypher_key}", "${cyphered_pass}")`;
    let user_id;

    try {
        user_id = await queryPromise(query, "run");
    } catch (err) {
        console.error("Unable to create user", err);
        res.status(500).send("Unable to create user");
        return;
    }

    res.status(200).json({ user_id });
});

module.exports = router;
