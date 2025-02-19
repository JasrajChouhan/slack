import { createContext, useContext, useState } from 'react';

type WorkspacePrefrenceModalContextType = {
  openCreateWorkspacePrefModal: boolean;
  setOpenCreateWorkspacePrefModal: React.Dispatch<React.SetStateAction<boolean>>;
};
export const WorkspacePrefrenceContext = createContext<undefined | WorkspacePrefrenceModalContextType>(undefined);

// provider

export const WorkspacePrefrenceContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [openCreateWorkspacePrefModal, setOpenCreateWorkspacePrefModal] = useState<boolean>(false);
  return (
    <WorkspacePrefrenceContext.Provider
      value={{
        openCreateWorkspacePrefModal,
        setOpenCreateWorkspacePrefModal,
      }}
    >
      {children}
    </WorkspacePrefrenceContext.Provider>
  );
};

// hooks
export const useWorkspacePrefrence = () => {
  const context = useContext(WorkspacePrefrenceContext);
  if (context === undefined) {
    throw new Error('useWorkspacePrefrence must be used within a WorkspacePrefrenceContextProvider');
  }
  return context;
};
