import { z } from "zod";

export const validationSchema = z.object({
  sandwichName: z.string({required_error: "Required field"}).min(1, {message: "Required field"}).max(35, {message: "Should be less than 35 letters"}),
  cutlery: z.boolean().optional(),
  napkins: z.boolean().optional(),
  base: z.object({
    bread: z.string(),
    cheese: z.array(z.string()).optional(),
    meat: z.array(z.string()).optional(),
    dressing: z.array(z.string()).optional(),
    vegetables: z.array(z.string()).optional(),
  }),
  extras: z.object({
    egg: z.array(z.string()).optional(),
    spreads: z.array(z.string()),
    serving: z.string({required_error: "You have to choose one!", invalid_type_error: "You have to choose one!"}),
    topping: z.union([z.string(), z.null()]).optional(),
  }),
});

export type SchemaType = z.infer<typeof validationSchema>;
