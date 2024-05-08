import dotenv from 'dotenv';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const envFound = dotenv.config();
if (!envFound) {
  throw new Error("⚠️  Couldn't find .env file  ⚠️");
}
export default {
  port: process.env.PORT,
  databaseURL: process.env.DATABASE_URL,
  databaseURI: process.env.DATABASE_URI,
  secretOrKey: process.env.SECRET_KEY,
  logs: {
    level: process.env.LOG_LEVEL || 'silly',
  },
  api: {
    prefix: '/api/v1',
  },

  securityKey: process.env.SECURITY_KEY,

  emailService: {
    service: process.env.MAIL_SERVICE,
    host: process.env.HOST,
    email_port: process.env.EMAIL_PORT,
    auth_username: process.env.AUTH_USERNAME,
    auth_password: process.env.AUTH_PASSWORD,
  },
};
