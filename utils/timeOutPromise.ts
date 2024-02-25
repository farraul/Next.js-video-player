export const timeOutPromise = (delay: number) =>
  new Promise<void>((resolve, reject) => {
    setTimeout(resolve, delay);
  });
