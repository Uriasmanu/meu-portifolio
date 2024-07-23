import React, { createContext, useContext, useState } from 'react';

interface MenuContextType {
  menuAberto: boolean;
  abrirMenu: () => void;
}

const MenuContext = createContext<MenuContextType | undefined>(undefined);

export const useMenuContext = () => {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error('useMenuContext deve ser usado dentro de um MenuProvider');
  }
  return context;
};

export const MenuProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [menuAberto, setMenuAberto] = useState(false);

  const abrirMenu = () => {
    setMenuAberto(!menuAberto);
  };

  const menuContextValue: MenuContextType = {
    menuAberto,
    abrirMenu,
  };

  return (
    <MenuContext.Provider value={menuContextValue}>
      {children}
    </MenuContext.Provider>
  );
};
