import React from 'react'
import TenderCard from './TenderCard'
import TenderCardSkeleton from './TenderCardSkeleton'
import TenderDetails from './TenderDetails'
import TenderDetailsSkeleton from './TenderDetailsSkeleton'

const TenderLists = () => {
  return (
<>
    <div className='bg-[#FAFAFF] p-8 flex flex-col gap-4' >
      
          <TenderCard/>
          <TenderCardSkeleton/>
          <TenderDetails/>
      <TenderDetailsSkeleton/>
        
    </div>
   
</>

  )
}

export default TenderLists