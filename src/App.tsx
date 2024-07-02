import { StyleSheetManager } from 'styled-components';
import './App.css';
import Inicio from './assets/Paginas/Inicio';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MeusTrabalhos from './assets/Paginas/MeusTrabalhos';
import NotFound from './assets/Paginas/NotFound/indesx';
import { MenuProvider } from './assets/contexts/MenuContext';


const App: React.FC = () => {
  return (
    <MenuProvider>
      <StyleSheetManager shouldForwardProp={(prop) => prop !== 'isOpen' && prop !== 'isAnimating'}>
        <Router>
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/MeusTrabalhos" element={<MeusTrabalhos />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </StyleSheetManager>
    </MenuProvider>
  );
};

export default App;
