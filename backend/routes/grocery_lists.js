const express = require("express");
const router = express.Router();
const { queryPromise, sqliteToJsArray } = require("../helpers");

router.get("/", async (req, res) => {
    const user_id = req.query.user;
    const query = `SELECT * FROM GroceryLists WHERE user_id='${user_id}'`;
    let grocery_lists;

    try {
        grocery_lists = await queryPromise(query, "all");
    } catch (err) {
        console.error("Error fetching grocery lists", err);
        res.status(500).send("Error fetching grocery lists");
        return;
    }

    grocery_lists = grocery_lists.map((list) => {
        return { ...list, items: sqliteToJsArray(list.items) };
    });

    res.status(200).json({ grocery_lists });
});

router.get("/get", async (req, res) => {
    const list_id = req.query.list;
    const query = `SELECT * FROM GroceryLists WHERE id='${list_id}'`;
    let grocery_list;

    try {
        grocery_list = await queryPromise(query, "get");
    } catch (err) {
        console.error("Error fetching grocery list", err);
        res.status(500).send("Error fetching grocery list");
        return;
    }

    grocery_list.items = sqliteToJsArray(grocery_list.items);
    res.status(200).json(grocery_list);
});

router.post("/new", async (req, res) => {
    const { name, items, user_id } = req.body;
    const query = `INSERT INTO GroceryLists (name, items, user_id) VALUES ("${name}", "${items}", "${user_id}")`;

    try {
        const newListID = await queryPromise(query, "run");
    } catch (err) {
        console.error("Unable to create list", err);
        res.status(500).send("Error creating grocery list");
        return;
    }

    res.status(200).json({ grocery_list_id: newListID });
});

router.post("/edit", async (req, res) => {
    const { id, name, items } = req.body;
    const query = `UPDATE GroceryLists SET name = "${name}", items = "${items}" WHERE id='${id}'`;

    try {
        const listID = await queryPromise(query, "run");
    } catch (err) {
        console.error("Unable to edit list", err);
        res.status(500).send("Error editing grocery list");
        return;
    }

    res.status(200).json({ grocery_list_id: listID });
});

router.post("/delete", async (req, res) => {
    const { id } = req.body;
    const query = `DELETE FROM GroceryLists WHERE id='${id}'`;

    try {
        await queryPromise(query, "run");
    } catch (err) {
        console.error("Unable to delete list", err);
        res.status(500).send("Error deleting list");
        return;
    }

    res.status(200).send("ok");
});

module.exports = router;
