import React from 'react';
import { CarouselProvider } from './CarouselContext';
import { MenuProvider } from './MenuContext';

const Providers: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <CarouselProvider>
      <MenuProvider>
        {children}
      </MenuProvider>
    </CarouselProvider>
  );
};

export default Providers;
