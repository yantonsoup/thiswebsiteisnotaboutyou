const getEnv = () => {
  return {
    DB_URI: process.env.DB_URI,
    COLLECTION: process.env.COLLECTION,
    BASE_URL: process.env.BASE_URL,
  };
};

module.exports = { getEnv };
