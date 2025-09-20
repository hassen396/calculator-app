import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import NaveBar from './Components/NaveBar.tsx'

createRoot(document.getElementById('root')!).render(
  <div className="flex flex-col w-full">
    <NaveBar />
    <App />
  </div>,
)
