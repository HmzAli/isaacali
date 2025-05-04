import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './theme.scss'

import Index from './pages/Index/Index.tsx'
import PrivacyPolicy from './pages/PrivacyPolicy'

import { BrowserRouter, Route, Routes } from 'react-router'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
