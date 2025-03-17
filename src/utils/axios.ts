import axios, { InternalAxiosRequestConfig } from 'axios';
// config
import { RESTFUL_HOST_API } from 'src/config-global';
import storage from './storage';

// ----------------------------------------------------------------------

const axiosInstance = axios.create({ baseURL: RESTFUL_HOST_API });

axiosInstance.interceptors.response.use(
  (res) => res,
  (error) => Promise.reject((error.response && error.response.data) || 'Something went wrong')
);

axiosInstance.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  const accessToken = storage.getToken();
  config.headers.Authorization = `Bearer ${accessToken}`;

  return config;
});

export default axiosInstance;

// ----------------------------------------------------------------------

export const endpoints = {
  auth: {
    me: '/auth/me',
    login: '/auth/login',
    register: '/auth/register',
  },
  upload: {
    image: '/upload/image',
    imageURL: '/upload/image-url',
  },
  project: {
    contactMessage: '/project/:projectId/contact-message',
  },
};
