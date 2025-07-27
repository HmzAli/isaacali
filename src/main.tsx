import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'jquery/dist/jquery.min.js'
import './theme.scss'

import Index from './pages/Index/Index.tsx'
import PrivacyPolicy from './pages/PrivacyPolicy'
import NotFound from './pages/NotFound'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Theme from './pages/Theme/index.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/theme" element={<Theme />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)