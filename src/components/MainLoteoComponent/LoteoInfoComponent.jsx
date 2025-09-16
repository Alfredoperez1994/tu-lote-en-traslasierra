import "./LoteoInfoComponent.css";

const LoteoInfoComponent = () => {
    return (
        <section className="loteo-info">
            <div className="loteo-info__text">

                <p className="loteo-info__description">
                    Villa Dolores se ubica como la Localidad más importante del Valle de Traslasierra, ubicada al oeste de la Capital Cordobesa. Es el centro turístico y comercial mas importante de la zona, abasteciendo a otras localidades como Villa de las Rosas, Mina Clavero, Nono, Cura Brochero, que se ubican a pocos kilómetros.

                    Podemos afirmar que Villa Dolores se ubica en el corazón de Traslasierra siendo así un lugar ideal para vacacionar o vivir de forma permanente por contar con las mejores escuelas, clubes deportivos, hospitales, ríos, balnearios, comercios de todo tipo, etc.


                </p>

                <h3 className="loteo-info__subtitle">
                    <span className="loteo-info_highlight">EMPEZÁ A </span>
                  {" "}  <em>CAPITALIZAR</em> {" "}
                    <span className="loteo-info_highlight">TUS AHORROS EN UN </span>
                    <em>TERRENO</em>
                </h3>
                <p className="loteo-info__offer">
                    Ofrecemos terrenos <span className="italic">100% financiados</span>,  Ubicados en un entorno natural único, rodeado de montañas y con la tranquilidad
                    de una ciudad en crecimiento, Villa Dolores se convierte en una excelente
                    oportunidad para tu inversión.
                </p>
            </div>

            <ul className="loteo-info__features">
                <li><span className="check">✔</span> Vista directa a las <span className="italic">Altas Cumbres</span></li>
                <li><span className="check">✔</span> 100% financiado, <span className="italic">sin entrega</span></li>
                <li><span className="check">✔</span> Terrenos listos para iniciar tramite de<span className="italic"> Escrituración</span></li>
                <li><span className="check">✔</span> Sin comisión inmobiliaria, <span className="italic">Vende DUEÑO DIRECTO</span></li>
            </ul>
        </section>
    );
};

export default LoteoInfoComponent;
