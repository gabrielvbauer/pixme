-- CreateTable
CREATE TABLE "Pix" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL DEFAULT E'anonymous',
    "value" DECIMAL(65,30),
    "message" TEXT,
    "approved" BOOLEAN NOT NULL DEFAULT false,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Pix_pkey" PRIMARY KEY ("id")
);
