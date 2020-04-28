import React from 'react';
import { Route } from 'react-router-dom';

import Home from '../pages/Home';
import Register from '../pages/Register';
import ListHelper from '../pages/List/indexHelper';
import ListHelped from '../pages/List/indexHelped';
import Profile from '../pages/Profile';
import Form from '../pages/Form';


export default function Routes() {

    return (
        <>
            <Route path="/" exact component={Home} />
            <Route path="/register" component={Register} />
            <Route path="/list-helper" component={ListHelper} />
            <Route path="/list-helped" component={ListHelped} />
            <Route path="/profile" component={Profile} />
            <Route path="/form" component={Form} />
        </>

    )
}