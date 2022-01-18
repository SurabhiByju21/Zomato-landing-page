import React from 'react'
import {Routes, Route} from "react-router-dom";


//Layout
import HomeLayout from "../layouts/Homepage.layout";

function HomeLayoutHOC({ component: Component, path,  ...rest}) {
    return (
        <>
           
                <Route
                {...rest}
                path = {path}
                component={
                    (props) =>(
                        <HomeLayout {...props}>
                            <Component {...props} />
                        </HomeLayout>
                    )
                }
                />
    
        </>
    );
}

export default HomeLayoutHOC;