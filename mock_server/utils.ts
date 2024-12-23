export const delay = (time: number = 1000): Promise<unknown> => {
  return new Promise((resolve) => setTimeout(resolve, time));
};
