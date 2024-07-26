import { StyleSheetManager } from 'styled-components';
import './App.css';
import Inicio from './assets/Paginas/Inicio';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MeusTrabalhos from './assets/Paginas/MeusTrabalhos';
import NotFound from './assets/Paginas/NotFound/indesx';
import Providers from './assets/contexts/Providers';


const App: React.FC = () => {
  return (
    <Providers>
      <StyleSheetManager shouldForwardProp={(prop) => prop !== 'isOpen' && prop !== 'isAnimating'}>
        <Router>
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/MeusTrabalhos" element={<MeusTrabalhos />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </StyleSheetManager>
    </Providers>
  );
};

export default App;
