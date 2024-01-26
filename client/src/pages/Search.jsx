import React from 'react'
import Sidebar from '../components/Sidebar'

import TenderLists from '../components/TenderLists'

const Search = () => {
  return (
<div className='grid' style={{ gridTemplateColumns: '1fr 3fr' }}>
      
    <Sidebar />


    <TenderLists />

    </div>
  )
}

export default Search