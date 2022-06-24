-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Pix" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL DEFAULT 'anonymous',
    "value" DECIMAL,
    "message" TEXT,
    "approved" BOOLEAN NOT NULL DEFAULT false,
    "timestamp" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Pix" ("approved", "id", "message", "name", "timestamp", "value") SELECT "approved", "id", "message", "name", "timestamp", "value" FROM "Pix";
DROP TABLE "Pix";
ALTER TABLE "new_Pix" RENAME TO "Pix";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
