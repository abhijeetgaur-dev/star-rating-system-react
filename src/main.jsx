import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import StarRating from './StarRating.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <StarRating />
  </StrictMode>,
)
