const axios = require("axios");
const recipe_file = require("./recipes.json");
const recipes = recipe_file.recipes;

for (const recipe of recipes) {
    axios.post("http://localhost:3000/recipes/new", recipe).then((res) => {
        console.log("New recipe with id:", res.data.recipe_id);
    })   
}

