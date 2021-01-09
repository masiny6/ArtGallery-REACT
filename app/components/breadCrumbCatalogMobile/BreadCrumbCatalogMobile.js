import React from "react"
import { NavLink } from "react-router-dom"
import "./breadCrumbCatalogMobile.scss"

export const BreadCrumbCatalogMobile = () => {
    return(
        <div className="bread-crumb">
            <NavLink to="/" className="bread-crumb__link">Назад</NavLink>
        </div>
    )
}