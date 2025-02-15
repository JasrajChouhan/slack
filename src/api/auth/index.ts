import { axiosInstance } from '@/config';

export const singupRequest = async (data) => {
  try {
    const response = await axiosInstance.post('/auth/users/signup', data);
    return response.data;
  } catch (error: any) {
    throw error.response.data;
  }
};
