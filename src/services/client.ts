import axios, { Method } from 'axios';

interface RequestConfig {
  method: Method;
  url: string;
  data?: any;
}

export const client = (config: RequestConfig) =>
  axios({
    ...config,
    headers: { 'X-MICROCMS-API-KEY': process.env.NEXT_PUBLIC_X_API_KEY },
  });

export type Client = ReturnType<typeof client>;
