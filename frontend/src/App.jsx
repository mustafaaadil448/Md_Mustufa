import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'; //
import ChangePassword from './components/Auth/ChangePassword';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import CreateUser from './components/Dashboard/CreateUser';
import UserList from './components/Dashboard/UserList';
import Welcome from './components/Dashboard/Welcome';
import Navbar from './components/Navbar';
import Toast from './components/Toast';
import { AuthProvider } from './context/AuthContext'; //import authprovider
import Home from './pages/Home'; //import Home
import NotFound from './pages/NotFound';
import Unauthorized from './pages/Unauthorized'; //import unauthorized page
// Main App component
const App = () => (
  <AuthProvider>
    <Router>
      <Navbar />
      <Toast />
      <Routes>
        <Route path="/" element={<Home />} /> {/* Public Homepage */}
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/change-password" element={<ChangePassword />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/create-user" element={<CreateUser />} />
        <Route path="/admin/users" element={<UserList />} />
        <Route path="/unauthorized" element={<Unauthorized />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  </AuthProvider>
);

export default App;
