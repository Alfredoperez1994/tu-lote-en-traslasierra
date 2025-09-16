import React from "react";
import "./FloatingWathsappButton.css"
import { FaWhatsapp } from "react-icons/fa";

const FloatingWhatsappButton = ({ phone = "5493511234567", message = "¡Hola! Quiero más info sobre los lotes." }) => {
    const link = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    return (
        <a
            href={link}
            className="floating-whatsapp-button"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contactar por WhatsApp"
        >
            <FaWhatsapp />
        </a>
    );
};

export default FloatingWhatsappButton;
