export const buildApiPath = (url: string) => {
  const env = process.env.NODE_ENV;
  if (env == "development") {
    return `http://localhost:5020${url}`;
  } else if (env == "production") {
    //return `http://juanortizdev.com${url}`;
    return `http://localhost:5020${url}`;
  }
};
