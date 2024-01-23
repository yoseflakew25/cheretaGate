
import heroPic from "../../assets/hero.png";

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
            Nobis minus voluptatibus pariatur dignissimos libero quaerat iure
            expedita at? Asperiores nemo possimus nesciunt dicta veniam
            aspernatur quam mollitia.
          </p>

          <button className="btn btn-primary opacity-75 opacity-75 px-12 text-white mr-4">Get Started</button>
          <button className="btn btn-outline btn-primary opacity-75 px-12">Primary</button>
        </div>
        {/* <div className="md:5/12 lg:w-1/2">
          <img
            src={tempPic}
            alt="image"
            loading="lazy"
            width=""
            height=""
            className="rounded-3xl"
          />
        </div> */}
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