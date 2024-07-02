// MenuContext.tsx
import React, { createContext, useContext, useState } from 'react';

// Definir o tipo do contexto, se necessário
interface MenuContextType {
  menuAberto: boolean;
  abrirMenu: () => void;
}

// Criar o contexto
const MenuContext = createContext<MenuContextType | undefined>(undefined);

// Criar um hook personalizado para acessar o contexto
export const useMenuContext = () => {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error('useMenuContext deve ser usado dentro de um MenuProvider');
  }
  return context;
};

// Criar o provider do contexto
export const MenuProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [menuAberto, setMenuAberto] = useState(false);

  const abrirMenu = () => {
    setMenuAberto(!menuAberto);
  };

  const contextValue: MenuContextType = {
    menuAberto,
    abrirMenu,
  };

  return (
    <MenuContext.Provider value={contextValue}>
      {children}
    </MenuContext.Provider>
  );
};
