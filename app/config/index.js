import dotenv from 'dotenv';
dotenv.config();

const env = process.env.NODE_ENV || 'development';

import config from './prod.js'

export default config;