export const generateRandomFromArray = (arr: string[]): string => {
  const randomString = Math.floor(Math.random() * arr.length);
  return arr[randomString];
};
