import React from 'react'

const TenderCard = () => {
  return (
    <div className="h-auto w-full bg-base-100 shadow-md rounded-md">
    <div className="card-body text-gray-600">
      <h2 className="card-title text-gray-600">ግልጽ ጨረታ፦ ኮሜርሻል ኖሚኒስ ኃ.የተ.የግል ማህበር ያገለገሉ የጽዳት ማሽነሪዎች ፣ የቢሮ ፈርኒቸሮች ፣ የተለያዩ ኮምፒውተር እና ሌሎች ዕቃዎች ህጋዊ የንግድ ፍቃድ ያላቸውን ተጫራቾች በግልጽ ጨረታ አወዳድሮ ለመሸጥ ይፈልጋል።</h2>
      <div className="divider -my-1"></div>
      <p> <span className='font-bold'>Bid Closing Date : </span>If a dog chews shoes whose shoes does he choose?</p>
      <p><span className='font-bold'> Bid Opening Date : </span>If a dog chews shoes whose shoes does he choose?</p>
      <p><span className='font-bold'>Published On : </span>If a dog chews shoes whose shoes does he choose?</p>

      <div className="divider -my-2"></div>
     <div className='flex items-center justify-between gap-4 mt-2'>
        <div className='flex gap-4'>
        <div className='text-green-500 font-semibold text-sm flex items-center gap-1 '>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
</svg>

            <p>BIDDING OPEN</p>

</div>

<button className="px-10 py-1 text-sm font-medium rounded-lg text-primary border border-primary opacity-75 bg-[#FAFAFF] hover:bg-primary hover:text-white">
             
                Save
              </button>
        </div>

        <div><p>8 hours ago</p></div>

     </div>
    </div>
  </div>
  )
}

export default TenderCard