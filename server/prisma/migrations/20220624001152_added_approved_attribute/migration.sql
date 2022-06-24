-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Pix" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL DEFAULT 'anonymous',
    "value" DECIMAL,
    "message" TEXT,
    "aproved" BOOLEAN NOT NULL DEFAULT false
);
INSERT INTO "new_Pix" ("id", "message", "name", "value") SELECT "id", "message", "name", "value" FROM "Pix";
DROP TABLE "Pix";
ALTER TABLE "new_Pix" RENAME TO "Pix";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
