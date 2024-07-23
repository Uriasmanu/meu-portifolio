import React, { createContext, useContext, useRef, useEffect } from 'react';

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
};

export const CarouselProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const carrosselRef = useRef<HTMLDivElement>(null);

  const handleScroll = (event: WheelEvent) => {
    if (carrosselRef.current) {
      carrosselRef.current.scrollLeft += event.deltaY > 0 ? 1000 : -1000;
    }
    event.preventDefault();
  };

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

  return (
    <CarouselContext.Provider value={carouselContextValue}>
      {children}
    </CarouselContext.Provider>
  );
};
