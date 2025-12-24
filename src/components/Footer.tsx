// src/components/Footer.tsx
import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <p>
        © {new Date().getFullYear()} Desarrollado con React & Vite por <span>Daniel Hernandez</span>
      </p>
    </footer>
  )
}

export default Footer