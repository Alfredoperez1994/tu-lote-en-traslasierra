import React from 'react'
import HeroComponent from '../components/HeroComponent/HeroComponent'
import MarqueeBannerComponent from '../components/MarqueeBannerComponent/MarqueeBannerComponent'
import MainLoteoComponent from '../components/MainLoteoComponent/MainLoteoComponent'

const Home = () => {
    return (
        <div>
            
            <MarqueeBannerComponent text=" ¡PREVENTA EXCLUSIVA HASTA EL 31 DE SEPTIEMBRE!!  |  CUOTAS DESDE 200 USD MENSUALES  " />
            <HeroComponent />
            <MainLoteoComponent />
        </div>
    )
}

export default Home