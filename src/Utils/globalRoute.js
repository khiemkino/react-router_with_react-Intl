import React from 'react'
import { Route } from 'react-router'

import HomePage from 'Frontend/Screen/HomePage'
import LoginPage from 'Frontend/Screen/LoginPage'

const Scenes = () => {
    return (
        <div>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/loginPage" component={LoginPage} />
        </div>
    )
}

export default Scenes
