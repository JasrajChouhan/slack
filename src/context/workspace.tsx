import { createContext, useContext, useState } from 'react';

type CreateWorkSpaceContextType = {
  openCreateWorkspaceModal: boolean;
  setOpenCreateWorkspaceModal: React.Dispatch<React.SetStateAction<boolean>>;
};

export const CreateWorkSpaceContext = createContext<CreateWorkSpaceContextType | undefined>(undefined);

// provider
export const CreateWorkSpaceContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [openCreateWorkspaceModal, setOpenCreateWorkspaceModal] = useState<boolean>(false);
  return (
    <CreateWorkSpaceContext.Provider
      value={{
        openCreateWorkspaceModal,
        setOpenCreateWorkspaceModal,
      }}
    >
      {children}
    </CreateWorkSpaceContext.Provider>
  );
};

// hook
export const useCreateWorkSpace = () => {
  const context = useContext(CreateWorkSpaceContext);
  if (!context) {
    throw new Error('useCreateWorkSpace must be used within a CreateWorkSpaceContextProvider');
  }
  return context;
};
