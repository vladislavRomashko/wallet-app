import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Main from './layouts/main'
import Login from './layouts/login'
import Operations from './layouts//operations'
import NavBar from './components/ui/navBar'
import ContainerWrapper from './components/common/containerWrapper'
import CreateOperation from './components/page/createOperation/createOperation'
import CreateCategory from './components/ui/createCategory'
import Footer from './components/ui/footer'

const App = () => {
    return (
        <div className="d-flex flex-column h-100">
            <NavBar />
            <main className="flex-shrink-0">
                <ContainerWrapper>
                    <Switch>
                        <Route exact path="/" component={Main} />
                        <Route path="/login/:type?" component={Login} />
                        <Route
                            path="/operations/:operationId?"
                            component={Operations}
                        />
                        <Route
                            path="/createOperation"
                            component={CreateOperation}
                        />
                        <Route
                            path="/createCategory"
                            component={CreateCategory}
                        />
                    </Switch>
                </ContainerWrapper>
            </main>
            <Footer />
        </div>
    )
}

export default App
