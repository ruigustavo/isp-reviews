import React from 'react'
import { Route, Switch } from 'react-router-dom'
import InternetProviders from './InternetProviders/InternetProviders'
import InternetProvider from './InternetProvider/InternetProvider'

const App = () => {
    return (
    <Switch> 
        <Route exact path="/" component={InternetProviders} />
        <Route path="/internet-providers/:slug" component={InternetProvider} />
    </Switch>
    )
}

export default App