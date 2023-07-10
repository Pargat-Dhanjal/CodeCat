import { createBrowserRouter } from 'react-router-dom';
import SignUp from '../pages/SignUp';
import Compiler from '../pages/Compiler';

const router = createBrowserRouter([
  {
    path: '/',
    element: <SignUp />,
  },
  {
    path: '/compiler',
    element: <Compiler />,
  },
]);

export default router;
