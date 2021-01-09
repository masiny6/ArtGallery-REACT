import React, { Fragment } from 'react'
import {Header} from '../header/Header'
import { HeaderWhite } from '../headerWhite/HeaderWhite'
import { Beginner } from '../beginner/Beginner'


export const Layout = () => {

    return(
        <Fragment>
        <Header/>
        <Beginner/>

        {/* <div className="content">
            <div className="routes">
                <Route path="/" exact component={Home}/>
                <Route path="/catalog" exact component={Catalog}/>
                <Route path="/productCard" exact component={}/>

                
                
            </div>

            <Sidebar/>
        </div> */}
        </Fragment>
    )
}