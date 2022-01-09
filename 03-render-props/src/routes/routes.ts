import FormikAbstract from 'pages/FormikAbstract';
import FormikBasic from 'pages/FormikBasic';
import FormikBasicYup from 'pages/FormikBasicYup';
import FormikComponents from 'pages/FormikComponents';
import RegisterFormik from 'pages/RegisterFormik';
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
    },
    {
        to: '/basic-formik',
        path: '/basic-formik',
        Component: FormikBasic,
        name: 'Basic formik'
    },
    {
        to: '/formik-yup',
        path: '/formik-yup',
        Component: FormikBasicYup,
        name: 'Basic formik yup'
    },
    {
        to: '/formik-comps',
        path: '/formik-comps',
        Component: FormikComponents,
        name: 'Formik components'
    },
    {
        to: '/formik-abstract',
        path: '/formik-abstract',
        Component: FormikAbstract,
        name: 'Formik asbstract'
    },
    {
        to: '/formik-register',
        path: '/formik-register',
        Component: RegisterFormik,
        name: 'Formik register'
    }
]