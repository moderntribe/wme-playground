// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { FunctionComponent } from "react";

import Home from "./pages/home";

interface Route {
    key: string,
    title: string,
    path: string,
    enabled: boolean,
    component: FunctionComponent
}

export const routes: Array<Route> = [
    {
        key: 'home-route',
        title: 'Home',
        path: '/',
        enabled: true,
        component: Home
    }
]
