import {
  createBrowserRouter,
  type RouteObject,
  RouterProvider,
  Navigate,
} from 'react-router-dom';
import { ClientRoutes } from '@enums';
import {
  HomePage,
  SignPage,
  TermsPage,
  ProfilePage,
  ConfirmEmailPage,
  EmailInstructionPage,
  ResetPasswordPage,
  PlayRobotPage,
} from '@pages';
import { SignIn, SignUp, ResetPasswordEmail } from '@components/sign';

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
      {
        path: ClientRoutes.RESET_PASSWORD_EMAIL,
        element: <ResetPasswordEmail />,
      },
    ],
  },
  { path: ClientRoutes.CONFIRM_EMAIL, element: <ConfirmEmailPage /> },
  { path: ClientRoutes.PASSWORD_RESET, element: <ResetPasswordPage /> },
  { path: ClientRoutes.TERMS, element: <TermsPage /> },
  { path: ClientRoutes.EMAIL_INFO, element: <EmailInstructionPage /> },
  { path: ClientRoutes.BOT_GAME, element: <PlayRobotPage /> },
  { path: '*', element: <Navigate to={ClientRoutes.HOME} replace={true} /> },
];

const privateRoutes: RouteObject[] = [
  { path: ClientRoutes.HOME, element: <HomePage /> },
  { path: ClientRoutes.TERMS, element: <TermsPage /> },
  { path: ClientRoutes.PROFILE, element: <ProfilePage /> },
  {
    path: ClientRoutes.SIGN,
    element: <SignPage />,
    children: [
      {
        path: ClientRoutes.RESET_PASSWORD_EMAIL,
        element: <ResetPasswordEmail />,
      },
    ],
  },
  { path: ClientRoutes.PASSWORD_RESET, element: <ResetPasswordPage /> },
  { path: ClientRoutes.EMAIL_INFO, element: <EmailInstructionPage /> },
  { path: ClientRoutes.BOT_GAME, element: <PlayRobotPage /> },
  { path: '*', element: <Navigate to={ClientRoutes.HOME} replace={true} /> },
];

const routes = (accessToken: string): RouteObject[] =>
  accessToken ? privateRoutes : publicRoutes;

export const AppRouterProvider = ({ accessToken }: AppRouterProviderProps) => (
  <RouterProvider router={createBrowserRouter(routes(accessToken))} />
);
