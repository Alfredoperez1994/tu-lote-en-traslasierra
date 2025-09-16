import { useEffect, useState } from "react";
import { FaBars, FaTimes, FaWhatsapp, FaEnvelope, FaPhone } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./StickyNavbarComponent.css";

const StickyNavbarComponent = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    // Cambiá 500 si querés que aparezca antes/después
    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 500);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMenu = () => setMenuOpen((v) => !v);

    // visible si scrolleaste o si el menú está abierto
    const visible = isScrolled || menuOpen;

    return (
        <header
            className={`navbar ${visible ? "navbar--visible" : ""} ${isScrolled ? "navbar--scrolled" : ""
                }`}
        >
            <div className="navbar__left">
                {visible && !menuOpen && (
                    <button
                        className="icon-button"
                        aria-label="Abrir menú"
                        aria-expanded={menuOpen}
                        onClick={toggleMenu}
                    >
                        <FaBars size={24} className="navbar__icon" />
                    </button>
                )}
            </div>

            <div className="navbar__center">
                {(isScrolled || menuOpen) && (
                    <img
                        src="/img/tu-lote-letras.png"
                        alt="Logo"
                        className="navbar__logo"
                    />
                )}
            </div>

            <div className="navbar__right">
                {visible && (
                    <>
                        <a
                            href="https://wa.me/5491112345678"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Whatsapp"
                        >
                            <FaWhatsapp size={20} className="navbar__icon" />
                        </a>
                        <a href="mailto:contacto@ejemplo.com" aria-label="Email">
                            <FaEnvelope size={20} className="navbar__icon" />
                        </a>
                        <a href="tel:+541112345678" aria-label="Teléfono">
                            <FaPhone size={20} className="navbar__icon" />
                        </a>
                    </>
                )}
            </div>

            {/* Menú lateral móvil */}
            <nav className={`mobile-menu ${menuOpen ? "open" : ""}`} aria-hidden={!menuOpen}>
                <button className="mobile-menu__close" onClick={toggleMenu} aria-label="Cerrar menú">
                    <FaTimes size={24} />
                </button>

                <ul>
                    <li>
                        <Link to="/" onClick={() => setMenuOpen(false)}>INICIO</Link>
                    </li>
                    <li>
                        <Link to="/info" onClick={() => setMenuOpen(false)}>INFO</Link>
                    </li>
                    <li>
                        <Link to="/contact" onClick={() => setMenuOpen(false)}>CONTACTO</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default StickyNavbarComponent;
