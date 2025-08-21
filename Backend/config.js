import dotenv from "dotenv";
dotenv.config();

export default {
  port: process.env.PORT || 3000,
  jwtKey: '5@LsgI+z#TSw+R9Mk62NHf(wR3Iwrv',
  dbConnection: process.env.MONGO_URI || 'mongodb://localhost:27017/miapp',
  cors: true
}
