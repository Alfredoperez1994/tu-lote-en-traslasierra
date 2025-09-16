import React, { useState, useEffect } from "react";
import lotesData from "../../data/lotesData";
import "./PlanoInteractivoLoteo.css";

const PlanoInteractivoLoteo = () => {
    const [selectedLote, setSelectedLote] = useState(null);
    const [hoveredLote, setHoveredLote] = useState(null);
    const [showHint, setShowHint] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (window.innerWidth <= 768) {
            setShowHint(true);
            const t = setTimeout(() => setShowHint(false), 3000);
            return () => clearTimeout(t);
        }
    }, []);

    const handlePrev = () => {
        if (!selectedLote?.fotos) return;
        setCurrentIndex((prev) =>
            prev === 0 ? selectedLote.fotos.length - 1 : prev - 1
        );
    };

    const handleNext = () => {
        if (!selectedLote?.fotos) return;
        setCurrentIndex((prev) =>
            prev === selectedLote.fotos.length - 1 ? 0 : prev + 1
        );
    };

    const closeModal = () => {
        setSelectedLote(null);
        setCurrentIndex(0);
    };

    return (
        <section className="plano-interactivo">
            {showHint && <div className="plano-hint">Deslizá para ver todo el plano ➡️</div>}

            <div className="plano-wrapper">
                <div className="plano-container">
                    <img
                        src="img/plano-pampas-del-sol.png"
                        alt="Plano del loteo"
                        className="plano-fondo"
                        draggable={false}
                    />

                    {lotesData.map((lote) => (
                        <div
                            key={lote.id}
                            className={`lote-marker ${lote.estado} ${lote.shape || ""}`}
                            style={{
                                top: lote.top,
                                left: lote.left,
                                width: lote.width || "30px",
                                height: lote.height || "30px",
                            }}
                            onClick={() => setSelectedLote(lote)}
                            onMouseEnter={() => setHoveredLote(lote)}
                            onMouseLeave={() => setHoveredLote(null)}
                        >
                            {lote.numero}
                        </div>
                    ))}
                </div>
            </div>

            {selectedLote && (
                <div className="lote-modal-overlay" onClick={closeModal}>
                    <div className="lote-modal" onClick={(e) => e.stopPropagation()}>
                        <button className="lote-modal__close" onClick={closeModal}>✕</button>
                        <img src="src/assets/logo.png" alt="Logo" className="lote-modal__logo" />
                        <h4>Lote Nº {selectedLote.numero}</h4>
                        <p>Medida: {selectedLote.medida}</p>
                        <p>Estado: {selectedLote.estado === "disponible" ? "Disponible" : "Vendido"}</p>

                        {selectedLote.estado === "disponible" && selectedLote.fotos && (
                            <div className="lote-carousel">
                                <button className="carousel-btn prev" onClick={handlePrev}>‹</button>
                                <img
                                    src={selectedLote.fotos[currentIndex]}
                                    alt={`Lote ${selectedLote.numero} - Foto ${currentIndex + 1}`}
                                    className="carousel-img"
                                />
                                <button className="carousel-btn next" onClick={handleNext}>›</button>
                            </div>
                        )}

                        {selectedLote.estado === "disponible" && (
                            <button className="btn-reservar" onClick={() => alert("Formulario para reservar lote")}>
                                Reservar
                            </button>
                        )}
                    </div>
                </div>
            )}
        </section>
    );
};

export default PlanoInteractivoLoteo;
