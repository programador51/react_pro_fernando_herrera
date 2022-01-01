import { lazy, LazyExoticComponent } from "react";

const Lazy1 = lazy(() => import(/* webpackChunkName: "LazyPage1" */ 'lazyload/layout/LazyLayout'));
const Lazy2 = lazy(() => import(/* webpackChunkName: "LazyPage2" */ 'lazyload/pages/NoLazy'));
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
    /**
     * Al that cross the path lazy will be pass first by Lazy1
     */
    {
        to: '/lazy/',
        path: '/lazy/*',
        Component: Lazy1,
        name: 'Dashboard'
    },
    {
        to: '/nolazy',
        path: 'nolazy',
        Component: Lazy2,
        name: 'No lazy'
    }
]