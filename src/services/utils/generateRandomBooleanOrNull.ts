export const generateRandomBooleanOrNull = (): boolean | null => {
    const randomValue = Math.random();
    return randomValue < 0.5 ? true : null;
  };