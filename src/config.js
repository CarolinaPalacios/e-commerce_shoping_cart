import process from 'node:process';
export const IS_DEVELOPMENT = process.env.NODE_ENV !== 'production';
