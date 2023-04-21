import { createBrowserRouter } from 'react-router-dom';
import Compiler from '../pages/Compiler'

const router = createBrowserRouter([
  {
    path: '/',
    exact: true,
    element: <Compiler />,
    // errorElement: <ErrorPage />, 
  },
]);

export default router;
