import "./MainLoteoComponent.css";
import LoteoInfoComponent from "./LoteoInfoComponent";
import PlanoInteractivoLoteo from "../PlanoInteractivoLoteo/PlanoInteractivoLoteo";
import LoteoHeaderComponent from "./LoteoHeaderComponent";

const MainLoteoComponent = () => {
    return (
        <section className="main-loteo">
            <div className="main-loteo__container">
                <LoteoHeaderComponent />
                <LoteoInfoComponent />

                {/* Plano interactivo + galería */}
                <div className="main-loteo__plano" id="plano">
                    <PlanoInteractivoLoteo />
                </div>
            </div>
        </section>
    );
};

export default MainLoteoComponent;
