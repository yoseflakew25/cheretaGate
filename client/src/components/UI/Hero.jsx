
import heroPic from "../../assets/hero.png";
import { Link } from "react-router-dom";
const Hero = () => {
  
  return (
    <section id="about" className="bg-[#FAFCFF]">
      <div className=" lg:p-16 rounded-[4rem] space-y-6 md:flex md:gap-6 justify-center md:space-y-0 lg:items-center">
        <div className="mx-8 md:7/12 lg:w-1/2">
          <h1 className="text-6xl font-bold text-primary opacity-75">
          Fast & Convenient
Tender Alert Service.
          </h1>
          <p className="my-8 text-gray-600">
          Unrestricted access to tender opportunities available throughout Ethiopia without any limitations or constraints. This means that individuals or businesses from any location within Ethiopia have the ability to participate in and explore tender processes without any restrictions on their access. 
          </p>

          <Link to='/search' className="btn btn-primary opacity-75  px-12 text-white mr-4">Get Started</Link>
          <Link to='/about' className="btn btn-outline btn-primary opacity-75 px-12">About</Link>
        </div>
     
        <div className="md:5/12 lg:w-1/2">
          <img
            src={heroPic}
            alt="image"
            loading="lazy"
            width=""
            height=""
          />
        </div>
      </div>
    </section>
  );
}

export default Hero