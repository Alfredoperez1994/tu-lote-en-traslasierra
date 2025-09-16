
import { useState } from "react";
import "./LoteoHeaderComponent.css";

const LoteoHeaderComponent = () => {
    const [showMap, setShowMap] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);

    // Array de imágenes con texto opcional arriba
    const slides = [
        {
            src: "/src/assets/image-villadolores.jpeg",
            alt: "Villa Dolores naturaleza",
            caption: "Naturaleza y tranquilidad"
        },
        {
            src: "/src/assets/Hospital-Villa-Dolores.jpg",
            alt: "Vista a las montañas",
            caption: "Hospital Regional"
        },
        {
            src: "/src/assets/terminal-de-villa-dolores.jpg",
            alt: "Ríos de la zona",
            caption: "Terminal de Villa Dolores"
        },
        {
            src: "/src/assets/villa-dolores2.png",
            alt: "Centro de Villa Dolores",
            caption: "Conectividad y servicios"
        },
        {
            src: "/src/assets/villa-dolores5.jpg",
            alt: "Terrenos en venta",
            caption: "Escuela Primaria"
        }
    ];

    const toggleMap = () => setShowMap(!showMap);

    // Cambiar slide
    const nextSlide = () =>
        setCurrentSlide((prev) => (prev + 1) % slides.length);

    const prevSlide = () =>
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

    return (
        <>
            <header className="loteo-header">
                <div className="loteo-header__content">
                    {/* Título principal */}
                    <h2 className="loteo-header__title">
                        <span className="loteo-header__highlight">Conocé</span>{" "}
                        <em>Villa Dolores,</em>{" "}
                        <span className="loteo-header__highlight">rodéate de naturaleza</span>
                    </h2>

                    {/* Carrusel */}
                    <div className="loteo-header__carousel">
                        <div className="loteo-header__slide">
                            <img
                                src={slides[currentSlide].src}
                                alt={slides[currentSlide].alt}
                            />
                            <div className="loteo-header__caption">
                                {slides[currentSlide].caption}
                            </div>
                        </div>

                        {/* Botones de navegación */}
                        <button className="carousel-btn prev" onClick={prevSlide}>
                            ‹
                        </button>
                        <button className="carousel-btn next" onClick={nextSlide}>
                            ›
                        </button>
                    </div>

                    {/* CTA */}
                    <button className="loteo-header__button" onClick={toggleMap}>
                        Ver ubicación
                    </button>
                </div>
            </header>

            {/* Modal con el mapa */}
            {showMap && (
                <div className="map-modal">
                    <div className="map-modal__content">
                        <button className="map-modal__close" onClick={toggleMap}>
                            ✕
                        </button>
                        <iframe
                            title="Ubicación Loteo"
                            src="https://www.google.com/maps?q=-31.961500,-65.144137&hl=es&z=13&output=embed"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                </div>
            )}
        </>
    );
};

export default LoteoHeaderComponent;
