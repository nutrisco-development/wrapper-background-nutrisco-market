import {createContext} from 'react';

type UserLocationContextType = {
  user: any;
  setUser: (user: any) => void;

  userModal: any;
  setUserModal: (userModal: any) => void;
};

export const UserLocationContext = createContext<UserLocationContextType>({
  user: null,
  setUser: () => {},

  userModal: null,
  setUserModal: () => {},
});
