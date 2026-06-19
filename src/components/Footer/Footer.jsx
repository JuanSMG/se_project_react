import "./Footer.css";

function Footer() {
  const CurrentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p className="footer__copyright">Developed by Juan Gonzalez</p>
      <p className="footer__year">{CurrentYear}</p>
    </footer>
  );
}

export default Footer;
