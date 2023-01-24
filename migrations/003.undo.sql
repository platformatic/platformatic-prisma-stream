-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_recipes" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "ingredients" TEXT NOT NULL,
    "difficulty" TEXT NOT NULL,
    "author_id" INTEGER NOT NULL,
    FOREIGN KEY ("author_id") REFERENCES "authors" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_recipes" ("author_id", "difficulty", "id", "ingredients", "title") SELECT "author_id", "difficulty", "id", "ingredients", "title" FROM "recipes";
DROP TABLE "recipes";
ALTER TABLE "new_recipes" RENAME TO "recipes";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;