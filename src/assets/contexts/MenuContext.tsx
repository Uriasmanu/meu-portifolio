import React, { createContext, useContext, useState, useEffect, useRef } from 'react';

// Tipos do carrossel
interface CarouselContextType {
  carrosselRef: React.RefObject<HTMLDivElement>;
}

const CarouselContext = createContext<CarouselContextType | undefined>(undefined);

export const useCarouselContext = () => {
  const context = useContext(CarouselContext);
  if (!context) {
    throw new Error('useCarouselContext must be used within a CarouselProvider');
  }
  return context;
}

// Tipos do menu
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

// Provedor combinado
export const Provider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const carrosselRef = useRef<HTMLDivElement>(null);

  const handleScroll = (event: WheelEvent) => {
    if (carrosselRef.current) {
      carrosselRef.current.scrollLeft += event.deltaY > 0 ? 1000 : -1000;
    }
    event.preventDefault();
  }

  useEffect(() => {
    const container = carrosselRef.current;
    if (container) {
      container.addEventListener('wheel', handleScroll);
    }

    return () => {
      if (container) {
        container.removeEventListener('wheel', handleScroll);
      }
    };
  }, []);

  const carouselContextValue: CarouselContextType = {
    carrosselRef,
  };

  const [menuAberto, setMenuAberto] = useState(false);

  const abrirMenu = () => {
    setMenuAberto(!menuAberto);
  };

  const menuContextValue: MenuContextType = {
    menuAberto,
    abrirMenu,
  };

  return (
    <CarouselContext.Provider value={carouselContextValue}>
      <MenuContext.Provider value={menuContextValue}>
        {children}
      </MenuContext.Provider>
    </CarouselContext.Provider>
  );
};
