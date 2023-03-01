// import { useAuth } from '../hooks/useAuth';
// import { Navigate } from 'react-router-dom';

interface AuthRoutesProps {
  children: JSX.Element;
}

export function AuthRoutes({ children }: AuthRoutesProps) {
  // const auth = useAuth();
  // return auth.token ? children : <Navigate to="/login" />;
}
