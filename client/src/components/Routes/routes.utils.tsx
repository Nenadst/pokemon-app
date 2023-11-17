import Dashboard from 'src/pages/Dashboard/Dashboard';
import { Navigate, createBrowserRouter } from 'react-router-dom';
import Layout from 'src/components/Layout/Layout';
import routes from 'src/utils/routes';
import RegisterPage from 'src/pages/Register/RegisterPage';
import SignIn from 'src/pages/SignIn/SignIn';
import Profile from 'src/pages/Profile/Profile';
import Locations from 'src/pages/Locations/Locations';
import PokemonAdditionalDetails from 'src/pages/PokemonAdditionalDetails/PokemonAdditionalDetails';

export const authenticatedRouter = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: routes.ROOT,
        element: <Dashboard />
      },
      {
        path: routes.LOCATIONS_PAGE,
        element: <Locations />
      },
      {
        path: `${routes.ADDITIONAL_ABILITIES_PAGE}/:name`,
        element: <PokemonAdditionalDetails />
      },
      {
        path: routes.PROFILE_PAGE,
        element: <Profile />
      }
    ]
  },
  {
    path: routes.LOGIN_PAGE,
    element: <SignIn />
  },
  {
    path: routes.REGISTER_PAGE,
    element: <RegisterPage />
  }
]);

export const unAuthenticatedRouter = createBrowserRouter([
  {
    path: routes.LOGIN_PAGE,
    element: <SignIn />
  },
  {
    path: routes.REGISTER_PAGE,
    element: <RegisterPage />
  },
  /* REDIRECT */
  /* TODO Investigate if login_hint can be added to ID token on BE side */
  {
    path: '*',
    element: <Navigate to={`${routes.LOGIN_PAGE}`} replace />
  }
]);
