import { createBrowserRouter } from 'react-router-dom';
import Compiler from '../pages/Compiler'
import Login from '../pages/Login'

const router = createBrowserRouter([
  {
    path: '/',
    exact: true,
    element: <Compiler />,
    // errorElement: <ErrorPage />, 
  },
  {
    path: '/login',
    element: <Login />,
  }
]);

export default router;
