import React, { createContext, useContext, useState } from 'react';

const ProfileContext = createContext();

export const useUserContext = () => {
  return useContext(ProfileContext);
};

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: 'Анна',
    email: 'ann@example.com',
    address: '123 Маріупольська',
    phoneNumber: '123-456-7890',
  });

  return (
    <ProfileContext.Provider value={{ user, setUser }}>
      {children}
    </ProfileContext.Provider>
  );
};
