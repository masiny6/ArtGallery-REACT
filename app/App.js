import React, { Fragment } from "react"
import { Route } from "react-router-dom"
import { Catalog } from "./pages/catalog/Catalog"
import { Home } from "./pages/home/Home"
import "./scss/app.scss"

// import {Layout} from './components/layout/Layout'

export default class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return(
            <Fragment>
                <Route path="/" exact component={Home}/>
                <Route path="/catalog" exact component={Catalog}/>
            </Fragment>
        )
    }
}