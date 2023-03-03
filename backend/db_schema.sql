PRAGMA foreign_keys=ON;

BEGIN TRANSACTION;


CREATE TABLE IF NOT EXISTS GroceryLists (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    list_name TEXT NOT NULL,
    items TEXT ARRAY NOT NULL
);

CREATE TABLE IF NOT EXISTS Recipes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    recipe_name TEXT NOT NULL,
    recipe_description TEXT,
    instructions TEXT,
    ingredients TEXT ARRAY NOT NULL
)

COMMIT;

