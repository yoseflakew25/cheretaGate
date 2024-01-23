import Brand1 from '../../assets/cbe.jpg'
import Brand2 from '../../assets/awash.jpg'
import Brand3 from '../../assets/dashen.jpg'
import Brand4 from '../../assets/hibret.jpg'
import Brand5 from '../../assets/tele.png'




const BrandCloud = () => {
  return (
    
    <div className="bg-[#FAFCFF] py-16 px-32 -mt-4">
    <div className="container m-auto space-y-8 text-gray-500 md:px-12 lg:px-40">
      <div className="mb-8">
        <h2 className="text-2xl text-center font-bold text-primary opacity-75 mb-16">Tenders From Popular Companies</h2>
      </div>
      <div className="scrollbar-transparent overflow-x-auto lg:overflow-hidden">
        <div className="-mx-6 flex space-x-6 px-6 md:space-x-12 lg:justify-between">
          <img
            src={Brand1}
            loading="lazy"
            className="grayscale transition hover:grayscale-0 h-24 w-32"
            alt="logo"
          />
          <img
 src={Brand2}            loading="lazy"
            className=" grayscale transition hover:grayscale-0 h-24 w-24"
            alt="logo"
          />
          <img
 src={Brand3}            loading="lazy"
            className="grayscale transition hover:grayscale-0 h-24 w-24"
            alt="logo"
          />
          <img
 src={Brand4}            loading="lazy"
            className="grayscale transition hover:grayscale-0 h-24 w-32"
            alt="logo"
          />
          <img
 src={Brand5}            loading="lazy"
            className="grayscale transition hover:grayscale-0 h-24 w-24"
            alt="logo"
          />
        </div>
      </div>
    </div>
  </div>
                                      
  )
}

export default BrandCloud