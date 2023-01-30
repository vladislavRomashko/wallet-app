import React from 'react'
import { Route, Switch } from 'react-router-dom'
import MainPage from './layouts/mainPage'
import LogInPage from './layouts/logInPage'
import operationsPage from './layouts/operationsPage'
import NavBar from './components/navBar'

const App = () => {
    return (
        <>
            <NavBar />
            <Switch>
                <Route exact path="/" component={MainPage} />
                <Route path="/login" component={LogInPage} />
                <Route
                    path="/operations/:operationId?"
                    component={operationsPage}
                />
            </Switch>
        </>
    )
}

export default App
