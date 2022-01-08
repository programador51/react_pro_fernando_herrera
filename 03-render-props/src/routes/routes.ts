import RegisterPage from 'pages/RegisterPage';
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
        to: '/register',
        path: '/register',
        Component: RegisterPage,
        name: 'Register'
    }
]