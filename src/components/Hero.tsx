import { motion } from 'framer-motion'

const Hero: React.FC = () => {
  return (
    <section id="home" className="section hero">
      {/* 1. Saludo y Nombre */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="hero-greeting"
      >
        <span>Hola, soy</span>
        <h2>Daniel Hernandez</h2>
      </motion.div>

      {/* 2. Tu frase principal (Value Proposition) */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }} // Delay para que salga después del nombre
      >
        Desarrollo software enfocado en resolver
        <span> problemas reales</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        Aplicaciones y plataformas web con diseño moderno
        y lógica de negocio sólida.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <a href="#projects" className="btn-primary">
          Ver proyectos
        </a>
      </motion.div>
    </section>
  )
}

export default Hero