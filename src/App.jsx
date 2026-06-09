import './App.css'
import { Layout } from './components/layout/layout.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { InicioPage, NosotrosPage, ContactosPage, ProductosPage, PersonajePage } from './pages';
//import { Card, footer, header, layout } from './components';

function App() {
  return (
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path='/' element={<InicioPage />} />
            <Route path='/contactos' element={<ContactosPage />} />
            <Route path='/nosotros' element={<NosotrosPage />} />
            <Route path='/productos' element={<ProductosPage />} />
            <Route path='/personajes' element={<PersonajePage />} />
          </Routes>
        </Layout>
      </BrowserRouter>
  )
}

export default App
