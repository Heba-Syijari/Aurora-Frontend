import axios, { endpoints } from 'src/utils/axios';

export type SendContactMessagePayload = {
  projectId: string;
  name: string;
  email: string;
  description: string;
};

export const sendContactMessage = async (payload: SendContactMessagePayload) => {
  const url = endpoints.project.contactMessage.replace(':projectId', payload.projectId);
  return axios.post(url, payload);
};
