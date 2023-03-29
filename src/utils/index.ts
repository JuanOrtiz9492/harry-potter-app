export const buildApiPath = (url: string): string => {
  const env = process.env.NODE_ENV;
  if (env == "development") {
    return `http://localhost:5020${url}`;
  }
  return `http://www.juanortizdev.com${url}`;
  //return `http://localhost:5001${url}`;
};
