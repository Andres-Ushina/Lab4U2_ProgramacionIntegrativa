import { useState } from 'react'
import './App.css'
import images from './assets/images.png'
import { Card } from './components/card/card.jsx';
import { UserCard } from './components/userCard/userCard.jsx';
import { Layout } from './components/layout/layout.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { InicioPage } from './pages/inicio/inicio.jsx';
import { ContactosPage } from './pages/contactos/contactos.jsx';
import { NosotrosPage } from './pages/nosotros/nosotros.jsx';

function App() {
  const [contar, setContar] = useState(0);
  const [mostrarUserCards, setMostrarUserCards] = useState(true);

  return (
    <>

      <BrowserRouter>
        <Layout>
        
          <Routes>
            <Route path='/' element={<InicioPage></InicioPage>} />
            <Route path='/contactos' element={<ContactosPage></ContactosPage>} />
            <Route path='/nosotros' element={<NosotrosPage></NosotrosPage>} />
          </Routes>
  
        </Layout>

       
      </BrowserRouter>
     

    

    </>
  )
}

export default App
