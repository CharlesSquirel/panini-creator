import { SandwichPayload } from "./types";

export const initialValues:SandwichPayload = {
    sandwichName: "",
    cutlery: false,
    napkins: false,
    base: {
      bread: 'WHEAT',
      cheese: ['EDAM'],
      meat: ['SALAMI'],
      dressing: ['OLIVE OIL'],
      vegetables: [],
    },
    extras: {
      egg: ['FRIED EGG'],
      spreads: [],
      serving: '',
      topping: null
    }
}