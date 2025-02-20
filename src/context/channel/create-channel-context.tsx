import { createContext, useState, useContext } from 'react';

type CreateChannelContextType = {
  openCreateChannelModal: boolean;
  setOpenCreateChannelModal: React.Dispatch<React.SetStateAction<boolean>>;
};

export const CreateChannelContext = createContext<undefined | CreateChannelContextType>(undefined);

// provider

export const CreateChannelContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [openCreateChannelModal, setOpenCreateChannelModal] = useState<boolean>(false);
  return (
    <CreateChannelContext.Provider
      value={{
        openCreateChannelModal,
        setOpenCreateChannelModal,
      }}
    >
      {children}
    </CreateChannelContext.Provider>
  );
};

// hook

export const useCreateChannel = () => {
  const context = useContext(CreateChannelContext);
  if (!context) {
    throw new Error('useCreateChannel must be used within a CreateChannelContextProvider');
  }
  return context;
};
