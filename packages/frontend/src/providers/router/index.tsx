import {
  createBrowserRouter,
  type RouteObject,
  RouterProvider,
  Navigate,
} from 'react-router-dom';
import { ClientRoutes } from '@enums';
import { MainLayout, SignLayout } from '@components/layout';
import {
  HomePage,
  TermsPage,
  ProfilePage,
  ConfirmEmailPage,
  EmailInstructionPage,
  ResetPasswordPage,
  PlayRobotPage,
  PlayUserPage,
  SignInPage,
  SignUpPage,
  ResetPasswordEmailPage,
} from '@pages';

interface AppRouterProviderProps {
  accessToken: string;
}

const publicRoutes: RouteObject[] = [
  {
    element: <MainLayout />,
    children: [
      { path: ClientRoutes.HOME, element: <HomePage /> },
      {
        element: <SignLayout />,
        children: [
          { path: ClientRoutes.SIGNIN, element: <SignInPage /> },
          { path: ClientRoutes.SIGNUP, element: <SignUpPage /> },
          {
            path: ClientRoutes.RESET_PASSWORD_EMAIL,
            element: <ResetPasswordEmailPage />,
          },
        ],
      },
      { path: ClientRoutes.CONFIRM_EMAIL, element: <ConfirmEmailPage /> },
      { path: ClientRoutes.PASSWORD_RESET, element: <ResetPasswordPage /> },
      { path: ClientRoutes.TERMS, element: <TermsPage /> },
      { path: ClientRoutes.EMAIL_INFO, element: <EmailInstructionPage /> },
      { path: ClientRoutes.BOT_GAME, element: <PlayRobotPage /> },
    ],
  },

  { path: '*', element: <Navigate to={ClientRoutes.HOME} replace={true} /> },
];

const privateRoutes: RouteObject[] = [
  {
    element: <MainLayout />,
    children: [
      { path: ClientRoutes.HOME, element: <HomePage /> },
      { path: ClientRoutes.TERMS, element: <TermsPage /> },
      { path: ClientRoutes.PROFILE, element: <ProfilePage /> },
      {
        element: <SignLayout />,
        children: [
          {
            path: ClientRoutes.RESET_PASSWORD_EMAIL,
            element: <ResetPasswordEmailPage />,
          },
        ],
      },
      { path: ClientRoutes.PASSWORD_RESET, element: <ResetPasswordPage /> },
      { path: ClientRoutes.EMAIL_INFO, element: <EmailInstructionPage /> },
      { path: ClientRoutes.BOT_GAME, element: <PlayRobotPage /> },
      { path: ClientRoutes.USERS_GAME, element: <PlayUserPage /> },
    ],
  },

  { path: '*', element: <Navigate to={ClientRoutes.HOME} replace={true} /> },
];

const routes = (accessToken: string): RouteObject[] =>
  accessToken ? privateRoutes : publicRoutes;

export const AppRouterProvider = ({ accessToken }: AppRouterProviderProps) => (
  <RouterProvider router={createBrowserRouter(routes(accessToken))} />
);
