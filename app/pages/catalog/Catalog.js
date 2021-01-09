import React from 'react'
import './catalog.scss'
import { HeaderWhite } from "../../components/headerWhite/HeaderWhite"
import { TitleCatalog } from '../../components/titleCatalog/TitleCatalog'
import { BreadCrumbCatalogMobile } from '../../components/breadCrumbCatalogMobile/BreadCrumbCatalogMobile'
import { FilterCatalog } from '../../components/filterCatalog/FilterCatalog'
import { Footer } from '../../components/footer/Footer'
import { PopularFilterCatalog } from '../../components/popularFilterCatalog/PopularFilterCatalog'
import { Works } from '../../components/works/Works'

export const Catalog = () => {
    return(
        <div className="popular-filter-main">
        <HeaderWhite/>
        <main className="catalog-main">
            <TitleCatalog/>
            <BreadCrumbCatalogMobile/>
            <FilterCatalog/>
            <PopularFilterCatalog/>
            <Works/>
        </main>
        <Footer/>
        </div>
    )
}