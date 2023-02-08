import {
  createBrowserRouter,
  type RouteObject,
  RouterProvider,
} from 'react-router-dom';
import { ClientRoutes } from '@enums';
import { store } from '@store';
import { HomePage, SignPage, TermsPage } from '@pages';

const publicRoutes: RouteObject[] = [
  { path: ClientRoutes.HOME, element: <HomePage /> },
  {
    path: ClientRoutes.SIGN,
    element: <SignPage />,
    children: [{ path: ClientRoutes.SIGNIN }, { path: ClientRoutes.SIGNUP }],
  },
  { path: ClientRoutes.TERMS, element: <TermsPage /> },
];

const privateRoutes: RouteObject[] = [
  { path: ClientRoutes.HOME, element: <HomePage /> },
  { path: ClientRoutes.TERMS, element: <TermsPage /> },
];

const routes = (): RouteObject[] => {
  const accessToken = store.getState().auth.accessToken;

  return accessToken ? privateRoutes : publicRoutes;
};

const router = createBrowserRouter(routes());

export const AppRouterProvider = () => <RouterProvider router={router} />;
