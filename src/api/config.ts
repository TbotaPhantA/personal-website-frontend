const throwRequired = (propName: keyof NodeJS.ProcessEnv): never => {
  throw new Error(`Config property ${propName} is required`);
};

export default {
  BASE_URL: process.env.BASE_URL ?? throwRequired('BASE_URL'),
}
