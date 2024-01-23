import {  Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './pages/About';
import Faqq from './pages/Faqq';
import Tenders from './pages/Tenders';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Error from './pages/Error';
import Dashboard from './pages/Dashboard';
import CreateTender from './pages/CreateTender';
import Verify from './pages/Verify'

function App() {
  const location = useLocation();
  const { pathname } = location;

  const isTendersRoute = pathname.startsWith('/tenders');

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />

        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<Faqq />} />

        <Route path="/user/verify-email" element={<Verify />} />


        <Route path="/tenders" element={<Tenders />}/>
        <Route path="/profile" element={<Profile />}/>
        <Route path="/dashboard" element={<Dashboard />}/>
        <Route path="/createtender" element={<CreateTender />}/>

   
       

        <Route path='*' element={<Error />} />
      </Routes>
      <ToastContainer position='top-center' />
      {!isTendersRoute && <Footer />}
    </>
  );
}


export default App;