import "./HeroComponent.css";

const HeroComponent = () => {

    const handleScrollToPlano = () => {
        const planoSection = document.getElementById("plano");
        if (planoSection) {
            planoSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section className="hero">
            <div className="hero__background hero__background--image" aria-hidden="true" />
            <div className="hero__overlay" aria-hidden="true" />

            <div className="hero__content">
                <div className="hero__sticker">SEÑA TU TERRENO HASTA EL 31/09 Y OBTENE 100% DE FINANCIACION</div>
                <h1 className="hero__title">
                    ¿ESTAS BUSCANDO UN TERRENO EN <span className="hero__title--highlight">Traslasierra?</span>
                </h1>

                <p className="hero__subtitle">
                    <span className="hero__subtitle--strong">100% Financiado </span>
                    <span className="hero__subtitle--italic">sin entrega inicial</span>
                </p>

                <button className="button hero__cta" onClick={handleScrollToPlano}>
                    Descubrí nuestros terrenos <span>en Venta</span>
                </button>
            </div>

            {/* Fade inferior que conecta visualmente con el header */}
            <div className="hero__fade-bottom" aria-hidden="true" />
        </section>
    );
};

export default HeroComponent;
