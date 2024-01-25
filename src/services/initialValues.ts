import { SandwichPayload } from "./types";

export const initialValues:SandwichPayload = {
    sandwichName: "",
    cutlery: false,
    napkins: false,
    base: {
      bread: 'WHEAT',
      cheese: [''],
      meat: [''],
      dressing: [''],
      vegetables: [''],
    },
    extras: {
      egg: [''],
      spreads: [''],
      serving: '',
      topping: ''
    }
}