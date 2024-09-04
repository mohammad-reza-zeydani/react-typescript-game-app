import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { QueryClient ,QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter as Router } from 'react-router-dom'
const queruClient=new QueryClient()
createRoot(document.getElementById('root')!).render(
  <StrictMode>
 <Router>
    <QueryClientProvider client={queruClient}>
       <App />
    </QueryClientProvider>
 </Router>
  </StrictMode>,
)
