export class Logger {
  private static instance: Logger;

  private constructor() {}

  public static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }
    return Logger.instance;
  }

  info(message: string, context: object = {}) {
    console.log(`[INFO] ${message}`, context);
  }

  error(message: string, error: Error, context: object = {}) {
    console.error(`[ERROR] ${message}`, { error, ...context });
  }
}