import * as dotenv from 'dotenv'
dotenv.config()

export const secrets = {
  JWT_SECRET: process.env.JWT_SECRET,
  CALLBACK_URL: process.env.CALLBACK_URL,
  GOOGLE_SECRET_ID: process.env.GOOGLE_SECRET_ID,
  GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
  MONGO_URI: process.env.MONGO_URI
}
