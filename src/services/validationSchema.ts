import { z } from "zod";

export const validationSchema = z.object({
  sandwichName: z.string().max(35, { message: "Name should has less than 35 letters" }),
  cutlery: z.boolean(),
  napkins: z.boolean(),
  base: z.object({
    bread: z.string(),
    cheese: z.array(z.string()),
    meat: z.array(z.string()),
    dressing: z.array(z.string()),
    vegetables: z.array(z.string()),
  }),
  extras: z.object({
    egg: z.array(z.string()),
    spreads: z.array(z.string()),
    serving: z.string(),
    topping: z.union([z.string(), z.null()]),
  }),
});
