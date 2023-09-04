import dotenv from 'dotenv';
dotenv.config();

const env = process.env.NODE_ENV || 'development';

import config from './dev.js'

export default config;