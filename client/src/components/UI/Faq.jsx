
const Faq = () => {
  return (
    <div className="space-y-4 mx-8 lg:mx-64 my-16" >
                <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
   
   <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-primary opacity-75 sm:text-4xl md:mx-auto">
   Frequently Asked Questions.
   </h2>
 
 </div>
    <details
      className="group border-s-4 border-primary opacity-75 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden"
      open
    >
      <summary className="flex cursor-pointer items-center justify-between gap-1.5">
        <h2 className="text-lg font-medium text-gray-900">
        What is CheretaGate
        </h2>
  
        <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-45"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </summary>
  
      <p className="mt-4 leading-relaxed text-gray-700">
      CheretaGate is an online platform that aggregates and delivers tender notices from various sources across Ethiopia. We provide a one-stop-shop for businesses and individuals seeking to explore opportunities in the Ethiopian market.
      </p>
    </details>
  
    <details
      className="group border-s-4 border-primary opacity-75 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden"
    >
      <summary className="flex cursor-pointer items-center justify-between gap-1.5">
        <h2 className="text-lg font-medium text-gray-900">
        What are the sources of tenders?
        </h2>
  
        <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-45"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </summary>
  
      <p className="mt-4 leading-relaxed text-gray-700">
      We source information from a variety of authenticated sources such as newspapers, magazines, and the websites of relevant organizations.
      </p>
    </details>

    <details
      className="group border-s-4 border-primary opacity-75 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden"
    >
      <summary className="flex cursor-pointer items-center justify-between gap-1.5">
        <h2 className="text-lg font-medium text-gray-900">
        What payment options are available?
        </h2>
  
        <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-45"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </summary>
  
      <p className="mt-4 leading-relaxed text-gray-700">
      We offer two payment options for our subscription packages: bank transfer and Telebirr. You can pay through the following banks: - Commercial Bank of Ethiopia (CBE) If you have any other questions or concerns, please don't hesitate to reach out to us.
      </p>
    </details>
    <details
      className="group border-s-4 border-primary opacity-75 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden"
    >
      <summary className="flex cursor-pointer items-center justify-between gap-1.5">
        <h2 className="text-lg font-medium text-gray-900">
        How often is the tender database updated?
        </h2>
  
        <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-45"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </summary>
  
      <p className="mt-4 leading-relaxed text-gray-700">
      We collect data from various sources and upload it daily. Our team ensures accuracy of the data.
      </p>
    </details>

  </div>
  )
}

export default Faq