import React from 'react'
import { Footer } from '../../components/footer/Footer'
import { HeaderWhite } from '../../components/headerWhite/HeaderWhite'
import { ProductCardCatalog } from '../../components/productCardCatalog/ProductCardCatalog'
import { WorksCard } from '../../components/worksCard/WorksCard'
import './productCard.scss'

export const ProductCard = () => {
    return(
        <div className="product-card-main">
            <HeaderWhite/>
            <ProductCardCatalog/>
            <WorksCard/>
            <Footer/>
        </div>
    )
}