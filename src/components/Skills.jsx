import { motion } from 'framer-motion';

const skillsList = [
  "HTML", "CSS", "JavaScript", "Node.js", "PHP", 
  "Python", "Flask", "Django", "SQL", "Angular", 
  "MySQL", "PostgreSQL", "Git", "GitHub", "Linux",
];

const Skills = () => {
  return (
    <section id="habilidades" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Habilidades</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Tecnologías, frameworks y herramientas que utilizo
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto"
        >
          {skillsList.map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full text-sm font-medium shadow-sm hover:bg-blue-600 hover:text-white transition-all duration-200 cursor-default"
            >
              {skill}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;