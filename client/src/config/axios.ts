import axios, { type InternalAxiosRequestConfig, type AxiosInstance } from 'axios';

const handleAxiosError = (error: Error): Promise<string> => Promise.reject(error);

export const axiosInstance = (baseURL: string): AxiosInstance => {
  let instance = axios.create({});
  if (baseURL !== 'https://pokeapi.co/api/v2/') {
    instance = axios.create({ withCredentials: true });
  }

  instance?.interceptors.request.use(
    async (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      config: InternalAxiosRequestConfig<any>
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ): Promise<InternalAxiosRequestConfig<any>> => {
      config.baseURL = baseURL;

      return config;
    },
    (error: Error): Promise<string> => handleAxiosError(error)
  );

  return instance;
};
