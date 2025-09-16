import "./MarqueeBannerComponent.css";

const MarqueeBannerComponent = ({ text }) => {
    return (
        <div className="marquee-banner">
            <div className="marquee-banner__fade marquee-banner__fade--left"></div>
            <div className="marquee-banner__track">
                <p className="marquee-banner__text">{text}</p>
                <p className="marquee-banner__text">{text}</p>
                <p className="marquee-banner__text">{text}</p>
            </div>
            <div className="marquee-banner__fade marquee-banner__fade--right"></div>
        </div>
    );
};

export default MarqueeBannerComponent;
