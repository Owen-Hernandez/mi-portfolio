const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Owen Hernandez. Todos los derechos reservados.</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a
            href="https://github.com/Owen-Hernandez"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/owen-hernandez-5a1271344/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            LinkedIn
          </a>
          <a href="mailto:owenhernandez0721@gmail.com" className="hover:text-blue-400">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;