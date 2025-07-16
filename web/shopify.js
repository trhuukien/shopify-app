import { LATEST_API_VERSION } from "@shopify/shopify-api";
import { shopifyApp } from "@shopify/shopify-app-express";
import { PrismaSessionStorage } from '@shopify/shopify-app-session-storage-prisma';
import prisma from './context/prisma.js';
import { restResources } from "@shopify/shopify-api/rest/admin/2025-04";
import dotenv from 'dotenv';

dotenv.config({ path: '../.env' });
const storage = new PrismaSessionStorage(prisma);

const shopify = shopifyApp({
  api: {
    apiKey: process.env.SHOPIFY_API_KEY,
    apiSecretKey: process.env.SHOPIFY_API_SECRET,
    hostName: process.env.HOST.replace(/^https?:\/\//, '').replace(/\/$/, ''),
    apiVersion: LATEST_API_VERSION,
    restResources,
    billing: undefined,
  },
  auth: {
    path: "/api/auth",
    callbackPath: "/api/auth/callback",
  },
  webhooks: {
    path: '/api/webhooks',
  },
  sessionStorage: storage,
});

export default shopify;