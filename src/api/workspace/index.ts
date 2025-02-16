import { axiosInstance } from '@/config';
import { WorkspaceSchemaType } from '@/types';

type createWorkspaceRequestType = {
  data: WorkspaceSchemaType;
  token: string;
};

// create a workspace
export const createWorkspaceRequest = async ({ data, token }: createWorkspaceRequestType) => {
  try {
    const response = await axiosInstance.post('/api/v1/workspaces', data, {
      headers: {
        'x-access-token': token,
      },
    });
    return response.data;
  } catch (error: any) {
    throw error.response.data;
  }
};
