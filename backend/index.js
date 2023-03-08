// Initial express server configuration
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const sqlite3 = require("sqlite3").verbose();
const cors = require('cors');
const port = 5500;

// Configuring db connection
global.db = new sqlite3.Database("./database.db", function (err) {
    if (err) {
        console.error(err);
        process.exit(1);
    } else {
        console.log("DB connected!");
        global.db.run("PRAGMA foreign_keys=ON");
    }
});

app.use(bodyParser.json());
app.use(cors());

// Set Routes
const groceryListsRoutes = require("./routes/grocery_lists");
const recipeRoutes = require("./routes/recipes");
const userRoutes = require("./routes/users");
app.use("/grocerylists", groceryListsRoutes);
app.use("/recipes", recipeRoutes);
app.use("/users", userRoutes);

// Initialize express server
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
