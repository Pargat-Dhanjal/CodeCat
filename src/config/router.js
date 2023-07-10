import { Outlet, createBrowserRouter } from 'react-router-dom';
import SignUp from '../pages/SignUp';
import Compiler from '../pages/Compiler';
import AuthChecker from '../components/auth/AuthChecker';

const router = createBrowserRouter([
  {
    path: '/',
    element: <SignUp />,
  },
  {
    path: '/try',
    element: <Compiler />,
  },
  {
    path: '/',
    element: (
      <AuthChecker>
        <Outlet />
      </AuthChecker>
    ),
    children: [
      {
        path: '/compiler',
        element: <Compiler />,
      },
    ],
  },
]);

export default router;
