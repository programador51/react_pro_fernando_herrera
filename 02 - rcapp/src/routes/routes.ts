import LazyPage1 from "lazyload/pages/LazyPage";
import LazyPage2 from "lazyload/pages/LazyPage2";
import LazyPage3 from "lazyload/pages/LazyPage3";

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
    Component: () => JSX.Element,

    /**
     * ????
     */
    name: string;
}

export const routes: routeNav[] = [
    {
        to: '/lazy1',
        path: 'lazy1',
        Component: LazyPage1,
        name: 'Lazy 1'
    },
    {
        to: '/lazy2',
        path: 'lazy2',
        Component: LazyPage2,
        name: 'Lazy 2'
    },
    {
        to: '/lazy3',
        path: 'lazy3',
        Component: LazyPage3,
        name: 'Lazy 3'
    }
]