import { type AxiosRequestConfig } from 'axios';
import { axiosInstance } from './axios';

type AxiosConfig = AxiosRequestConfig | undefined;

export function get<T>(url: string, config: AxiosConfig = undefined): Promise<T> {
  return axiosInstance(process.env.VITE_BASE_URL_API!)
    .get(url, config)
    .then((response) => Promise.resolve(response.data))
    .catch((error) => Promise.reject(new Error(error)));
}

export function post<T, R>(url: string, data: T, config: AxiosConfig = undefined): Promise<R> {
  return axiosInstance(process.env.VITE_BASE_URL_API!)
    .post(url, data, config)
    .then((response) => Promise.resolve(response.data.result))
    .catch((error) => Promise.reject(new Error(error)));
}

export function remove<T>(url: string, config: AxiosConfig = undefined): Promise<T> {
  return axiosInstance(process.env.VITE_BASE_URL_API!)
    .delete(url, config)
    .then((response) => Promise.resolve(response.data.result))
    .catch((error) => Promise.reject(new Error(error)));
}

export function patch<T, R>(url: string, data: T, config: AxiosConfig = undefined): Promise<R> {
  return axiosInstance(process.env.VITE_BASE_URL_API!)
    .patch(url, data, config)
    .then((response) => Promise.resolve(response.data.result))
    .catch((error) => Promise.reject(new Error(error)));
}

export function getPokemons<T>(url: string, config: AxiosConfig = undefined): Promise<T> {
  return axiosInstance(process.env.VITE_POKEMON_API!)
    .get(url, config)
    .then((response) => Promise.resolve(response.data))
    .catch((error) => Promise.reject(new Error(error)));
}

export default { get, patch, remove, post };
