import React, { Fragment } from 'react'
import { Beginner } from '../../components/beginner/Beginner'
import { Footer } from '../../components/footer/Footer'
import { Header } from '../../components/header/Header'
import { News } from '../../components/news/News'
import { PopupAuthorization } from '../../components/popupAuthorization/PopupAuthorization'
import { PopupRegistration } from '../../components/popupRegistration/PopupRegistration'
import { PopupPasswordRecovery } from '../../components/popupPasswordRecovery/PopupPasswordRecovery'
import { PopupSuccess } from '../../components/popupSuccess/PopupSuccess'
import { Slider } from '../../components/slider/Slider'
import { Styles } from '../../components/styles/Styles'
import { Works } from '../../components/works/Works'
import './home.scss'

export const Home = () => {
    return(
        <Fragment>
            <div className="main">
            <Header/>
            <main className="main-content">
                <Slider/>
                <Beginner/>
                <Works/>
                <Styles/>
                <News/>
            </main>
            <Footer/>
            <PopupAuthorization/>
            <PopupRegistration/>
            <PopupPasswordRecovery/>
            <PopupSuccess/>
            </div>
        </Fragment>
    )
}