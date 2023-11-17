import { FC } from 'react';
import { RouterProvider } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { authenticatedRouter, unAuthenticatedRouter } from './routes.utils';

const Routes: FC = () => {
  const [cookies] = useCookies(['userData']);

  return (
    <>
      {cookies.userData ? (
        <RouterProvider router={authenticatedRouter} />
      ) : (
        <RouterProvider router={unAuthenticatedRouter} />
      )}
    </>
  );
};

export default Routes;
