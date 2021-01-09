import React, { Fragment } from 'react'
import { Beginner } from '../../components/beginner/Beginner'
import { Footer } from '../../components/footer/Footer'
import { Header } from '../../components/header/Header'
import { News } from '../../components/news/News'
import { Slider } from '../../components/slider/Slider'
import { Styles } from '../../components/styles/Styles'
import { Works } from '../../components/works/Works'
import './home.scss'

export const Home = () => {
    return(
        <Fragment>
            <div className="main-no-authorization">
            <Header/>
            <main className="main-content">
                <Slider/>
                <Beginner/>
                <Works/>
                <Styles/>
                <News/>
            </main>
            <Footer/>
            </div>
        </Fragment>
    )
}