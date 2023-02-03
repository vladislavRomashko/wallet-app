import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Main from './layouts/main'
import Login from './layouts/login'
import Operations from './layouts//operations'
import NavBar from './components/ui/navBar'

const App = () => {
    return (
        <>
            <NavBar />
            <Switch>
                <Route exact path="/" component={Main} />
                <Route path="/login/:type?" component={Login} />
                <Route
                    path="/operations/:operationId?"
                    component={Operations}
                />
            </Switch>
        </>
    )
}

export default App
