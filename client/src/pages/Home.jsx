
import Hero from '../components/UI/Hero'
import Cta from '../components/UI/Cta'
import Features from '../components/UI/Features'
import Features2 from '../components/UI/Features2'
import Faq from '../components/UI/Faq'
import BrandCloud from '../components/UI/BrandCloud'
import {  toast } from 'react-toastify';
const Home = () => {
  // const notify = () => toast("Wow so easy !");
  return (
    <>
     {/* <div>
        <button onClick={notify}>Notify !</button>
      
      </div> */}
    <Hero/>
    <BrandCloud/>
    <Features/>
    <Features2/>
   
    <Faq/>
    <Cta/>
    </>

  )
}

export default Home