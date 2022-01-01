import { lazy, LazyExoticComponent } from "react";

const Lazy1 = lazy(() => import(/* webpackChunkName: "LazyPage1" */ 'lazyload/pages/LazyPage'));
const Lazy2 = lazy(() => import(/* webpackChunkName: "LazyPage2" */ 'lazyload/pages/LazyPage2'));
const Lazy3 = lazy(() => import(/* webpackChunkName: "LazyPage3" */ 'lazyload/pages/LazyPage3'));

type JSXComponent = () => JSX.Element;

type routeNav = {
    /**
     * Navigation to
     */
    to: string;
    /**
     * Path for the Router component
     */
    path: string;

    /**
     * Component to render on that path
     */
    Component: LazyExoticComponent<JSXComponent> | JSXComponent,

    /**
     * ????
     */
    name: string;
}

export const routes: routeNav[] = [
    {
        to: '/lazy1',
        path: 'lazy1',
        Component: Lazy1,
        name: 'Lazy 1'
    },
    {
        to: '/lazy2',
        path: 'lazy2',
        Component: Lazy2,
        name: 'Lazy 2'
    },
    {
        to: '/lazy3',
        path: 'lazy3',
        Component: Lazy3,
        name: 'Lazy 3'
    }
]