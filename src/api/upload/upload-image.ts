import { AxiosResponse } from 'axios';
import axios, { endpoints } from 'src/utils/axios';

export type UploadImagePayload = {
  image: any;
};

export type UploadImageResponse = {
  filePath: string;
  fileURL: string;
};

export const uploadImage = async (
  payload: UploadImagePayload
): Promise<AxiosResponse<UploadImageResponse>> => {
  const formData = new FormData();
  formData.append('image', payload.image);
  return axios.post(endpoints.upload.image, formData);
};

export type UploadImageURLPayload = {
  imageURL: string;
};

export const uploadImageURL = async (
  payload: UploadImageURLPayload
): Promise<AxiosResponse<UploadImageResponse>> => axios.post(endpoints.upload.imageURL, payload);
