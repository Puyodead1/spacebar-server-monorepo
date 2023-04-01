-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "username" TEXT NOT NULL,
    "avatar" TEXT,
    "avatar_decoration" TEXT,
    "discriminator" TEXT NOT NULL,
    "public_flags" BIGINT NOT NULL,
    "flags" BIGINT NOT NULL,
    "purchased_flags" BIGINT NOT NULL,
    "premium_usage_flags" BIGINT NOT NULL,
    "banner" TEXT,
    "banner_color" TEXT,
    "accent_color" TEXT,
    "bio" TEXT,
    "locale" TEXT NOT NULL,
    "nsfw_allowed" BOOLEAN NOT NULL DEFAULT false,
    "mfa_enabled" BOOLEAN NOT NULL DEFAULT false,
    "premium_type" INTEGER NOT NULL,
    "email" TEXT,
    "verified" BOOLEAN NOT NULL DEFAULT false,
    "phone" TEXT,
    "bot" BOOLEAN NOT NULL DEFAULT false,
    "system" BOOLEAN NOT NULL DEFAULT false,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "password_hash" TEXT,
    "valid_tokens_since" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "totp_secret" TEXT,
    "totp_last_ticket" TEXT
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");
