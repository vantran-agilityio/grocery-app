import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

// Constants
import { API_URL, SECURE_STORE, SERVER_ERROR } from '@repo/constants';
import { getValueFor } from '@repo/utils';

const defaultOptions = {
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
};

const instance = axios.create(defaultOptions);

// instance.interceptors.request.use(
//   async (config) => {
//     const authToken = await getValueFor(SECURE_STORE.AUTH_TOKEN);

//     config.headers.Authorization = authToken || '';
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

instance.interceptors.response.use(
  (response) => {
    if (response.status === 401) {
      throw Error('You are not authorized');
    }
    return response;
  },
  (error) => {
    if (error.response && error.response.data) {
      return Promise.reject(error.response.data);
    }
    return Promise.reject(error.message);
  }
);

const GET = async <T>(url: string, config?: AxiosRequestConfig): Promise<T> => {
  const authToken = (await getValueFor(SECURE_STORE.AUTH_TOKEN)) || '';
  const defaultConfig = { headers: { Authorization: authToken } };

  try {
    const res: AxiosResponse<T> = await instance.get(url, {
      ...defaultConfig,
      ...config,
    });
    return res.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw error;
    }
    throw new Error(SERVER_ERROR);
  }
};

const POST = async <T>(
  url: string,
  payload: unknown,
  config?: AxiosRequestConfig
) => {
  const authToken = (await getValueFor(SECURE_STORE.AUTH_TOKEN)) || '';
  const defaultConfig = {
    headers: {
      Authorization: authToken,
    },
  };

  try {
    const res: AxiosResponse<T> = await instance.post(url, payload, {
      ...defaultConfig,
      ...config,
    });

    return res.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      throw error;
    }
    throw new Error(SERVER_ERROR);
  }
};

const DELETE = async <T>(
  url: string,
  config?: AxiosRequestConfig
): Promise<T> => {
  const authToken = (await getValueFor(SECURE_STORE.AUTH_TOKEN)) || '';
  const defaultConfig = { headers: { Authorization: authToken } };

  try {
    const res: AxiosResponse<T> = await instance.delete(url, {
      ...defaultConfig,
      ...config,
    });

    return res.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw error;
    }
    throw new Error(SERVER_ERROR);
  }
};

const PATCH = async <T>(
  url: string,
  payload: unknown,
  config?: AxiosRequestConfig
): Promise<T> => {
  const authToken = (await getValueFor(SECURE_STORE.AUTH_TOKEN)) || '';
  const defaultConfig = { headers: { Authorization: authToken } };

  try {
    const res: AxiosResponse<T> = await instance.patch(url, payload, {
      ...defaultConfig,
      ...config,
    });

    return res.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw error;
    }
    throw new Error(SERVER_ERROR);
  }
};

export { GET, POST, PATCH, DELETE };
