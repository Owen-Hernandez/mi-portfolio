import { motion } from 'framer-motion';

const About = () => {
  return (
    <section
      id="sobre-mi"
      className="py-20 flex items-center justify-center"
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold mb-6">Sobre mí</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            Tecnólogo en Análisis y Desarrollo de Software con experiencia en desarrollo backend y web.
            Enfocado en la creación de soluciones eficientes y en la automatización de procesos que optimicen resultados.
            Me caracterizo por la rápida adaptación a nuevas tecnologías, el aprendizaje continuo y la colaboración en equipos de desarrollo,
            aportando compromiso y calidad en cada proyecto.
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mt-4">
            Actualmente me desempeño como desarrollador backend en Crescend Atenea Software,
            donde trabajo con Python, SQL, JavaScript y Node.js en procesos de automatización y optimización de bases de datos.
          </p>
          {/* Decoración sutil */}
          <div className="mt-10 flex justify-center gap-4 text-blue-600 dark:text-blue-400">
            <span className="text-4xl animate-pulse">⬇️</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;