export interface SandwichPayload {
  sandwichName: string;
  cutlery: boolean;
  napkins: boolean;
  base: {
    bread: "FULL GRAIN" | "WHEAT";
    cheese: Array<"MOZZARELLA" | "STRACIATELLA" | "EDAM" | "GOUDA">;
    meat: Array<"SALAMI" | "HAM" | "BACON" | "CHICKEN" | "">;
    dressing: Array<"OLIVE OIL" | "HONEY_MUSTARD" | "RANCH" | "MAYO">;
    vegetables: Array<
      | "SALAD"
      | "TOMATO"
      | "OBERGINE"
      | "BEETROOT"
      | "PICKLES"
      | "ONION"
      | "PEPPER"
      | "ASPARAGUS"
      | "CUCUMBER"
    >;
  };
  extras: {
    egg: Array<"FRIED EGG" | "OMELET" | "SCRAMBLED EGG">;
    spreads: Array<"BUTTER" | "HUMMUS" | "GUACAMOLE">;
    serving: "COLD" | "WARM" | "GRILLED";
    topping: "SESAME" | null;
  };
}

export interface InputComponentProps {
  title: string;
  data: string[];
  varriants?: string[];
}

export interface ArrowButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

export type RegisterCheckboxValue = string | boolean | string[] | null;
