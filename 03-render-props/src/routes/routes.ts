import Shopping from '02-component-patterns/pages/Shopping';
import { LazyExoticComponent } from 'react';

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
        to: '/shopping/',
        path: '/shopping/*',
        Component: Shopping,
        name: 'Shopping'
    },
    // {
    //     to: '/nolazy',
    //     path: 'nolazy',
    //     Component: Lazy2,
    //     name: 'No lazy'
    // }
]