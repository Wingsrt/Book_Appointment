

import { Link, Route, Router, Switch } from 'react-router-dom'
import React from 'react'
import Navibar from '../../component/navbar/navibar'
import Contain from '../mainbox/contain'


function Landing() {
    return (<>
        <Navibar/>

        <Switch>
        
        <Route exact path='/'  component={Contain} />
        </Switch>
        </>
    )
}

export default Landing
