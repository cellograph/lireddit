import { Request, Response } from "express";
import { Redis } from "ioredis";
import { PrismaClient } from "@prisma/client";

export type MyContext = {
  req: Request & { session: Express.Session };
  redis: Redis;
  res: Response;
  prisma: PrismaClient;
};
