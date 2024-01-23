import { Link } from 'react-router-dom';
import Stats from '../components/UI/Stats';
import TendList from '../components/UI/TendList';
import UsersList from '../components/UI/UsersList';
export default function Dashboard() {

 
  return (



    <div className="px-8  md:px-32 py-8 max-w-screen mx-auto  bg-slate-50 flex flex-col gap-6">

<Stats/>

<div className='gap-8 md:grid-cols-2 grid  grid-cols-1'>
    

<TendList/>

<UsersList/>


</div>

    </div>

  );
}