-- CreateTable
CREATE TABLE "GameBotStat" (
    "id" UUID NOT NULL,
    "userId" UUID NOT NULL,
    "won" INTEGER NOT NULL DEFAULT 0,
    "drow" INTEGER NOT NULL DEFAULT 0,
    "robotWon" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "GameBotStat_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GameUserStat" (
    "id" UUID NOT NULL,
    "userId" UUID NOT NULL,
    "won" INTEGER NOT NULL DEFAULT 0,
    "drow" INTEGER NOT NULL DEFAULT 0,
    "lose" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "GameUserStat_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "GameBotStat_userId_key" ON "GameBotStat"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "GameUserStat_userId_key" ON "GameUserStat"("userId");

-- AddForeignKey
ALTER TABLE "GameBotStat" ADD CONSTRAINT "GameBotStat_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GameUserStat" ADD CONSTRAINT "GameUserStat_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
