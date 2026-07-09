const Footer = () => {
  return (
    <footer className="w-full flex justify-center items-center max-w-full bg-neutral-900 h-6.25">
      <p className="text-xs text-center text-neutral-300 m-2">
        © {new Date().getFullYear()}{' '}
        <a href="http://mgbdevops.es ">mgbdevops.es </a>· Todos los derechos
        reservados.
      </p>
    </footer>
  );
};

export default Footer;
