import { config as configDotenv } from 'dotenv';
import { resolve } from 'path';

switch (process.env.NODE_ENV) {
  case 'development':
    // eslint-disable-next-line no-console
    console.log('Environment is development');
    configDotenv({
      path: resolve(__dirname, './.env'),
    });
    break;
  case 'test':
    // eslint-disable-next-line no-console
    console.log('Environment is testing');
    configDotenv({
      path: resolve(__dirname, './.env.test'),
    });
    break;
  default:
    // eslint-disable-next-line no-console
    console.log('waiting for env variable');
}
