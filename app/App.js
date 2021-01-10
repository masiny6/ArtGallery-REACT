import React, { Fragment } from "react"
import { Route } from "react-router-dom"
import { Catalog } from "./pages/catalog/Catalog"
import { Home } from "./pages/home/Home"
import { ProductCard } from "./pages/productCard/ProductCard"
import "./scss/app.scss"


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
                <Route path="/Catalog" exact component={Catalog}/>
                <Route path="/ProductCard" exact component={ProductCard}/>
            </Fragment>
        )
    }
}