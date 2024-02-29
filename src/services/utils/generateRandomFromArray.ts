export const generateRandomFromArray = (arr: string[], options: { many?: boolean } = {}): string | string[] => {
  const { many = false } = options;

  if (many) {
    const count = Math.floor(Math.random() * (arr.length + 1)); 
    const shuffledArray = arr.slice().sort(() => Math.random() - 0.5);
    return shuffledArray.slice(0, count); 
  } else {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex]; 
  }
};
