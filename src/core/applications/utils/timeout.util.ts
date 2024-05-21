export const timeout = async (seconds: number) =>
  await new Promise((resolve) => setTimeout(resolve, seconds));
