const throwRequired = (propName: keyof NodeJS.ProcessEnv): never => {
  throw new Error(`Config property ${propName} is required`);
};

class Config {
  BASE_URL: string = process.env.NEXT_PUBLIC_BASE_URL ?? throwRequired('NEXT_PUBLIC_BASE_URL');
  BASE_TIMEOUT: number = 10000;

  private static instance: Config;
  private constructor() {}

  public static getInstance(): Config {
    if (!this.instance) { this.instance = new Config() }
    return this.instance;
  }
}

const config = Config.getInstance();

export default config;
