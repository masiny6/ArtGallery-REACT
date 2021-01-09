import React from "react"
import ReactDom from "react-dom"
import {BrowserRouter} from "react-router-dom"
import App from "./App.js"
import "./scss/reset.scss"
import "./scss/fonts.scss"

import "./scss/global.scss"

import "./scss/swiper-bundle.scss"
import "./scss/select2.scss"
import "./scss/ion.rangeSlider.scss"

import "./scss/index.scss"



const app = 
<BrowserRouter>
    <App/>
</BrowserRouter>

ReactDom.render(
    app,
    document.querySelector('#inner-body')
);