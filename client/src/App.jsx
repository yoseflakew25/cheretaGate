import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './pages/About';
import Faqq from './pages/Faqq';
import Search from './pages/Search';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Error from './pages/Error';
import Dashboard from './pages/Dashboard';
import CreateTender from './pages/CreateTender';
import Verify from './pages/Verify';
import ProtectedRoutes from './pages/ProtectedRoutes';

function App() {
  const location = useLocation();
  const { pathname } = location;

  const isTendersRoute = pathname.startsWith('/search');
  const excludeHeaderFooterRoutes = ['/sign-in', '/sign-up', '/user/verify-email'];
  const shouldRenderHeaderFooter = !excludeHeaderFooterRoutes.some(route => pathname.startsWith(route));

  return (
    <>
   
      {shouldRenderHeaderFooter && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<Faqq />} />
      
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />

        <Route path="/user/verify-email" element={<Verify />} />


        <Route element={<ProtectedRoutes />}>
          <Route path="/search" element={<Search />} />
          <Route path="/profile" element={<Profile />} />
        </Route>


   
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/createtender" element={<CreateTender />} />

        
        <Route path='*' element={<Error />} />
      </Routes>
      <ToastContainer position='top-center' />
      {shouldRenderHeaderFooter && !isTendersRoute && <Footer />}
     
    </>
  );
}

export default App;
