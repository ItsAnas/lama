import React, { Component } from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'

import Header from './components/Header'
import NotFound from './components/NotFound'
import Signin from './components/Signin'
import Register from './components/Register'
import LoggedInLanding from './components/LoggedInLanding'
import LoggedOffLanding from './components/LoggedOffLanding'
import Profile from './components/Profile'
import Logout from './components/Logout'


class Routes extends Component {
    render () {

        return (
            <div>
                <Header />
                    <Switch>
                        <Route component={ Register } exact path='/register' />
                        <Route component={ Signin } exact path='/signin' history={this.props.history}/>                        
                        <Route component={ Logout } exact path='/logout' />
                        { localStorage.token === undefined && <Route component={ LoggedOffLanding } exact path='/' /> }                        
                        { localStorage.token && <Route component={ LoggedInLanding } exact path='/' /> }
                        <AuthenticatedRoute component={ Profile } exact path='/profile' />
                        <Route component={ NotFound }/>
                    </Switch>
            </div>
        )
    }
}


const AuthenticatedRoute = ({ component: Component, ...rest }) => {
    if (localStorage.token) {
        return <Route { ...rest } render={ (props) => <Component { ...props } /> } />
    }
    else
        return <Route { ...rest } render={ (props) => <Redirect to={ { pathname: '/signin', state: { from: props.location } } }/> } />
}

export default Routes