import "./LoteoHorizontalGallery.css"

const galleryImages = [
    {
        src: "/src/assets/image-villadolores3.jpeg",
        caption: "Vista aérea del loteo",
    },
    {
        src: "/src/assets/image-villadolores2.jpeg",
        caption: "Naturaleza y entorno verde",
    },
    {
        src: "/src/assets/image-villadolores.jpeg",
        caption: "Acceso principal",
    },
    {
        src: "/src/assets/image-villadolores4.jpeg",
        caption: "Calles internas",
    },
];

const LoteoHorizontalGalleryComponent = () => {
    return (
        <section className="loteo-horizontal-gallery">
            <h3 className="loteo-horizontal-gallery__title">
                <em>GALERÍA DESTACADA</em>
            </h3>
            <div className="loteo-horizontal-gallery__container">
                {galleryImages.map((img, index) => (
                    <figure key={index} className="loteo-horizontal-gallery__item">
                        <img
                            src={img.src}
                            alt={img.caption}
                            className="loteo-horizontal-gallery__image"
                            loading="lazy"
                        />
                        <figcaption className="loteo-horizontal-gallery__caption">
                            {img.caption}
                        </figcaption>
                    </figure>
                ))}
            </div>
        </section>
    );
};

export default LoteoHorizontalGalleryComponent;
