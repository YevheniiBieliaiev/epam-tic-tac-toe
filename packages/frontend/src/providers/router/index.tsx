import {
  createBrowserRouter,
  type RouteObject,
  RouterProvider,
} from 'react-router-dom';
import { ClientRoutes } from '@enums';
import { HomePage, SignPage, TermsPage, ProfilePage } from '@pages';
import { SignIn, SignUp } from '@components/sign';

interface AppRouterProviderProps {
  accessToken: string;
}

const publicRoutes: RouteObject[] = [
  { path: ClientRoutes.HOME, element: <HomePage /> },
  {
    path: ClientRoutes.SIGN,
    element: <SignPage />,
    children: [
      { path: ClientRoutes.SIGNIN, element: <SignIn /> },
      { path: ClientRoutes.SIGNUP, element: <SignUp /> },
    ],
  },
  { path: ClientRoutes.PASSWORD_RESET },
  { path: ClientRoutes.CONFIRM_EMAIL },
  { path: ClientRoutes.TERMS, element: <TermsPage /> },
];

const privateRoutes: RouteObject[] = [
  { path: ClientRoutes.HOME, element: <HomePage /> },
  { path: ClientRoutes.TERMS, element: <TermsPage /> },
  { path: ClientRoutes.PROFILE, element: <ProfilePage /> },
];

const routes = (accessToken: string): RouteObject[] =>
  accessToken ? privateRoutes : publicRoutes;

export const AppRouterProvider = ({ accessToken }: AppRouterProviderProps) => (
  <RouterProvider router={createBrowserRouter(routes(accessToken))} />
);
