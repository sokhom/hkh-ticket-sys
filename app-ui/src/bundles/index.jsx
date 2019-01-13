import React from 'react';
import loadable from 'loadable-components';
import Preloader from 'components/Preloader';

export const admin = store => loadable(() => import(/* webpackChunkName: "admin" */ './Admin')
  .then(bundle => bundle.default(store)), { LoadingComponent: () => <Preloader /> });

export const auth = store => loadable(() => import(/* webpackChunkName: "auth" */ './Auth')
  .then(bundle => bundle.default(store)), { LoadingComponent: () => <Preloader /> });

export const admin1 = store => loadable(() => import('../components/layouts/CoreLayout')
    .then(bundle => bundle.default(store)), { LoadingComponent: () => <Preloader /> });

export const main = store => loadable(() => import(/* webpackChunkName: "main" */ './Main/components/MainLayout')
  .then(bundle => bundle.default(store)), { LoadingComponent: () => <Preloader /> });
