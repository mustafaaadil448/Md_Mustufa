import { useContext } from 'react';
import { Navigate } from 'react-router-dom'; // Import hooks, components
import AuthContext from '../context/AuthContext.jsx';

// Import the AuthContext to access user authentication
const ProtectedRoute = ({ role, children }) => {
  const { user } = useContext(AuthContext);

// Access user AuthContext
  if (!user) return <Navigate to="/login" />;
  if (role && user.role !== role) return <Navigate to="/unauthorized" />;
// If user is not logged then redirect to login page
  return children;
};

export default ProtectedRoute;
