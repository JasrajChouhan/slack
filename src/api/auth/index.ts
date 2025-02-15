import { axiosInstance } from '@/config';
import { SigninSchemaType, SignupSchemaType } from '@/types';
export const singupRequest = async (data: SignupSchemaType) => {
  try {
    const response = await axiosInstance.post('/api/v1/auth/users/signup', data);
    return response.data;
  } catch (error: any) {
    throw error.response.data;
  }
};

export const signinRequest = async (data: SigninSchemaType) => {
  try {
    const response = await axiosInstance.post('/api/v1/auth/users/signin', data);
    return response.data;
  } catch (error: any) {
    throw error.response.data;
  }
};
