
export enum LogLevel {
  Debug = 'debug',
  Info = 'info',
  Warn = 'warn',
  Error = 'error'
}
export class Logger {
  levels: LogLevel[];
  currentLevel: LogLevel;

  constructor(level: LogLevel = LogLevel.Info) {
    this.levels = [LogLevel.Debug, LogLevel.Info, LogLevel.Warn, LogLevel.Error];
    this.currentLevel = level;
  }

  shouldLog(level: LogLevel) {
    return this.levels.indexOf(level) >= this.levels.indexOf(this.currentLevel);
  }

  log(level: LogLevel, message: string) {
    if (this.shouldLog(level)) {
      const timestamp = new Date().toISOString();
      console.log(`[${timestamp}] [${level.toUpperCase()}]: ${message}`);
    }
  }

  debug(message: string) {
    this.log(LogLevel.Debug, message);
  }
  info(message: string) {
    this.log(LogLevel.Info, message);
  }
  warn(message: string) {
    this.log(LogLevel.Warn, message);
  }
  error(message: string) {
    this.log(LogLevel.Error, message);
  }

  logMessage(message: string, ...data: any[]): void {
    this.debug(`Message: ${message}, data: ${data}`);
  }
}
