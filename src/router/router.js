import React from 'react';

import {HashRouter as Router, Route, Switch, Link,NavLink,Redirect} from 'react-router-dom';
import Bundle from './bundle';
import Home from 'bundle-loader?lazy&name=home!pages/home';
import Page1 from 'pages/page1';
import ErrorPage from './error';

const Loading = function () {
    return <div>Loading...</div>
};

const createComponent = (component) => () => (
    <Bundle load={component}>
        {
            (Component) => Component ? <Component/> : <Loading/>
        }
    </Bundle>
);

const NavBar = ()=>(
    <div>
        <NavLink className="nav-link" exact to="/">第1个页面</NavLink>|&nbsp;
        <NavLink to="/page1/112233">第2个页面</NavLink>|&nbsp;
        <NavLink to='/react' activeClassName='active'>404</NavLink>
        <NavLink to='/redirect' activeClassName='active'>Redirect</NavLink>
    </div>
);

const getRouter = () => (
    <Router basename="demo" >
        <div>
            <NavBar/>
            <Switch>
                <Route exact path="/" component={createComponent(Home)}/>
                <Route path="/page1/:param" component={Page1}/>
                <Route  component={ErrorPage} />
            </Switch>
        </div>
    </Router>
);

export default getRouter;