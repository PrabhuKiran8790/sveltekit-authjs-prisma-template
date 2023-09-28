import { PrismaClient } from "@prisma/client";

// expose a singleton
export const db = new PrismaClient();