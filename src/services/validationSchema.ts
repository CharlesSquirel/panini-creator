import { z } from 'zod';

export const validationSchema = z.object({
  sandwichName: z
    .string({ required_error: 'Required field!' })
    .min(1, { message: 'Required field!' })
    .max(35, { message: 'Should be less than 35 letters!' }),
  cutlery: z.boolean().optional(),
  napkins: z.boolean().optional(),
  base: z.object({
    bread: z.enum(['FULL GRAIN', 'WHEAT']),
    cheese: z.array(z.enum(['MOZZARELLA', 'STRACIATELLA', 'EDAM', 'GOUDA'])).optional(),
    meat: z.array(z.enum(['SALAMI', 'HAM', 'BACON', 'CHICKEN'])).optional(),
    dressing: z.array(z.enum(['OLIVE OIL', 'HONEY_MUSTARD', 'RANCH', 'MAYO'])).optional(),
    vegetables: z.array(z.enum(['SALAD', 'TOMATO', 'OBERGINE', 'BEETROOT', 'PICKLES', 'ONION', 'PEPPER', 'ASPARAGUS', 'CUCUMBER'])).optional(),
  }),
  extras: z.object({
    egg: z.array(z.enum(["FRIED EGG","OMELET","SCRAMBLED EGG"])).optional(),
    spreads: z.array(z.enum(["BUTTER", "HUMMUS", "GUACAMOLE"])).optional(),
    serving: z.string({ required_error: 'You have to choose one!', invalid_type_error: 'You have to choose one!' }),
    topping: z.union([z.string(), z.null()]).optional(),
  }),
});

export type SchemaType = z.infer<typeof validationSchema>;
