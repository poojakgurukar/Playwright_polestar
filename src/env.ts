// src/env.ts
import { config } from 'dotenv';

config(); // Load .env file

export class Env {
  static getBaseUrl(): string {
    return process.env.BASE_URL || 'https://www.polestar.com/se'; // Default URL
  }
}
