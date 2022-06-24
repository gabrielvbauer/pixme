/*
  Warnings:

  - You are about to drop the column `aproved` on the `Pix` table. All the data in the column will be lost.
  - Added the required column `timestamp` to the `Pix` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Pix" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL DEFAULT 'anonymous',
    "value" DECIMAL,
    "message" TEXT,
    "approved" BOOLEAN NOT NULL DEFAULT false,
    "timestamp" DATETIME NOT NULL
);
INSERT INTO "new_Pix" ("id", "message", "name", "value") SELECT "id", "message", "name", "value" FROM "Pix";
DROP TABLE "Pix";
ALTER TABLE "new_Pix" RENAME TO "Pix";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
