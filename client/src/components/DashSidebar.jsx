import React, { useEffect, useState } from 'react';
import {
  HiUser,
  HiArrowSmRight,
  HiDocumentText,
  HiOutlineUserGroup,
  HiAnnotation,
  HiChartPie,
} from 'react-icons/hi';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { signoutSuccess } from '../redux/user/userSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

const DashSidebar = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentUser } = useSelector((state) => state.user);
  const [tab, setTab] = useState('');

  useEffect(() => {
    const currentTab = new URLSearchParams(location.search).get('tab');
    setTab(currentTab || '');
  }, [location.search]);

  const handleSignout = async () => {
    try {
      const res = await fetch('/api/user/signout', {
        method: 'POST',
      });
      const data = await res.json();
      if (!res.ok) {
        console.log(data.message);
      } else {
        dispatch(signoutSuccess());
        navigate('/sign-in');
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="p-8 bg-gray-50 border-b-2 md:border-r-2  h-full flex flex-col gap-4">
      {currentUser && currentUser.isAdmin && (
        <Link
          to="/dashboard?tab=dash"
          className={`hover:bg-slate-200 w-full bg-slate-100 text-primary opacity-75 font-medium p-4 rounded-md flex gap-2 ${
            tab === 'dash' ? 'text-blue-500' : ''
          }`}
        >
          <HiChartPie className="w-6 h-6 mr-2" />
          Dashboard
        </Link>
      )}

      <Link
        to="/dashboard?tab=profile"
        className={`hover:bg-slate-200 w-full bg-slate-100 text-primary opacity-75 font-medium p-4 rounded-md flex gap-2 items-center justify-between ${
          tab === 'profile' ? 'shadow-md' : ''
        }`}
      >
        <div className="flex gap-2 items-center">
          <HiUser className="w-6 h-6 mr-2" />
          Profile
        </div>
        {!currentUser.isAdmin && <div className="badge badge-primary">User</div>}
      </Link>

      {currentUser.isAdmin && (
        <Link
          to="/dashboard?tab=posts"
          className={`hover:bg-slate-200 w-full bg-slate-100 text-primary opacity-75 font-medium p-4 rounded-md flex gap-2 ${
            tab === 'posts' ? 'text-blue-500' : ''
          }`}
        >
          <HiDocumentText className="w-6 h-6 mr-2" />
          Tenders
        </Link>
      )}

      {currentUser.isAdmin && (
        <>
          <Link
            to="/dashboard?tab=users"
            className={`hover:bg-slate-200 w-full bg-slate-100 text-primary opacity-75 font-medium p-4 rounded-md flex gap-2 ${
              tab === 'users' ? 'text-blue-500' : ''
            }`}
          >
            <HiOutlineUserGroup className="w-6 h-6 mr-2" />
            Users
          </Link>
          <Link
            to="/dashboard?tab=activity"
            className={`hover:bg-slate-200 w-full bg-slate-100 text-primary opacity-75 font-medium p-4 rounded-md flex gap-2 ${
              tab === 'activity' ? 'text-blue-500' : ''
            }`}
          >
            <HiAnnotation className="w-6 h-6 mr-2" />
            Activity Log
          </Link>
        </>
      )}

      <button
        type="button"
        onClick={handleSignout}
        className="hover:bg-slate-200 w-full bg-slate-100 text-primary opacity-75 font-medium p-4 rounded-md flex gap-2"
      >
        <HiArrowSmRight className="w-6 h-6 mr-2" />
        Sign Out
      </button>
    </div>
  );
};

export default DashSidebar;
