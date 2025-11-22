import { z } from "zod";

export const numberSchema = z.object({
  number: z.number().min(1).max(50),
});

export const userInputSchema = z.object({
  number: z.number().min(1).max(1000),
});