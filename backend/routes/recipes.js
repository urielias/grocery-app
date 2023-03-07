const express = require("express");
const router = express.Router();
const { queryPromise, sqliteToJsArray } = require("../helpers");

router.get("/", async (req, res) => {
    const { name, difficulty, category, item } = req.query;
    const query = `SELECT * FROM Recipes`;
    let recipes;

    try {
        recipes = await queryPromise(query, "all");
    } catch (err) {
        console.error("Error fetching recipes", err);
        res.status(500).send("Error fetching recipes");
        return;
    }

    if (name) {
        recipes = recipes.filter((recipe) => recipe.name.includes(name));
    }

    if (difficulty) {
        recipes = recipes.filter((recipe) => parseInt(recipe.difficulty) === parseInt(difficulty));
    }

    if (category) {
        recipes = recipes.filter((recipe) => recipe.category.includes(category));
    }

    if (item) {
        recipes = recipes.filter((recipe) =>
            sqliteToJsArray(recipe.items).reduce((matching, item) => {
                if (item.includes(name)) return matching + 1;
                return matching;
            })
        );
    }

    res.status(200).json({ recipes });
});

router.get("/get", async (req, res) => {
    const { id } = req.query;
    const query = `SELECT * FROM Recipes WHERE id='${id}'`;
    let recipe;

    try {
        recipe = await queryPromise(query, "get");
    } catch (err) {
        console.error("Unable to fetch recipe", err);
        res.status(500).send("Unable to fetch recipe");
        return;
    }

    res.status(200).json({ recipe });
});

router.post("/new", async (req, res) => {
    const { name, difficulty, category, description, ingredients, instructions } = req.body;
    const query = `INSERT INTO Recipes (name, difficulty, category, description, ingredients, instructions) VALUES ("${name}", "${difficulty}", "${category}", "${description}", "${ingredients}", "${instructions}")`;
    let recipe_id;

    try {
        recipe_id = await queryPromise(query, "run");
    } catch (err) {
        console.error("Unable to create recipe", err);
        res.status(500).send("Error creating recipe");
        return;
    }

    res.status(200).json({ recipe_id });
});

router.post("/delete", async (req, res) => {
    const { id } = req.body;
    const query = `DELETE FROM Recipes WHERE id='${id}'`;

    try {
        await queryPromise(query, "run");
    } catch (err) {
        console.error("Unable to delete recipe", err);
        res.status(500).send("Error deleting recipe");
        return;
    }

    res.status(200).send("ok");
});

module.exports = router;
