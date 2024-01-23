import React from 'react'
import { Link } from 'react-router-dom'
const TendList = () => {
  return (
    <div className="rounded-3xl bg-white p-8">


  <div className="flex flex-col gap-4">


    <h1 className="text-center mt-4 text-2xl font-semibold">
     Tenders
    </h1>




    {/* {userListings.map((listing) => ( */}
      <div
        // key={listing._id}
        className="border rounded-lg p-3 flex justify-between items-center gap-4 bg-white hover:bg-gray-100 ease-in-out duration-300"
      >

        <button
          className="text-slate-700 font-semibold  hover:underline truncate ml-4 "
        //   to={`/listing/${listing._id}`}
        >
          <p>ግልጽ ጨረታ፦ ኮሜርሻል ኖሚኒስ ኃ.የተ.የግል ማህበር ያገለገሉ የጽዳት ማሽነሪዎች ፣ የቢሮ ፈርኒቸሮች ፣ የተለያዩ ኮምፒውተር እና ሌሎች ዕቃዎች ህጋዊ የንግድ ፍቃድ ያላቸውን ተጫራቾች በግልጽ ጨረታ አወዳድሮ ለመሸጥ ይፈልጋል።</p>
        </button>

        <div className="flex flex-row gap-4 item-center">
          <button
            // onClick={() => handleListingDelete(listing._id)}
            className="text-red-700 uppercase"
          >
            Delete
          </button>
          <Link>
            <button className="text-green-700 uppercase">Edit</button>
          </Link>
        </div>
      </div>

      <div
        // key={listing._id}
        className="border rounded-lg p-3 flex justify-between items-center gap-4 bg-white hover:bg-gray-100 ease-in-out duration-300"
      >

        <button
          className="text-slate-700 font-semibold  hover:underline truncate ml-4 "
        //   to={`/listing/${listing._id}`}
        >
          <p>ግልጽ ጨረታ፦ ኮሜርሻል ኖሚኒስ ኃ.የተ.የግል ማህበር ያገለገሉ የጽዳት ማሽነሪዎች ፣ የቢሮ ፈርኒቸሮች ፣ የተለያዩ ኮምፒውተር እና ሌሎች ዕቃዎች ህጋዊ የንግድ ፍቃድ ያላቸውን ተጫራቾች በግልጽ ጨረታ አወዳድሮ ለመሸጥ ይፈልጋል።</p>
        </button>

        <div className="flex flex-row gap-4 item-center">
          <button
            // onClick={() => handleListingDelete(listing._id)}
            className="text-red-700 uppercase"
          >
            Delete
          </button>
          <Link>
            <button className="text-green-700 uppercase">Edit</button>
          </Link>
        </div>
      </div>

      <div
        // key={listing._id}
        className="border rounded-lg p-3 flex justify-between items-center gap-4 bg-white hover:bg-gray-100 ease-in-out duration-300"
      >

        <button
          className="text-slate-700 font-semibold  hover:underline truncate ml-4 "
        //   to={`/listing/${listing._id}`}
        >
          <p>ግልጽ ጨረታ፦ ኮሜርሻል ኖሚኒስ ኃ.የተ.የግል ማህበር ያገለገሉ የጽዳት ማሽነሪዎች ፣ የቢሮ ፈርኒቸሮች ፣ የተለያዩ ኮምፒውተር እና ሌሎች ዕቃዎች ህጋዊ የንግድ ፍቃድ ያላቸውን ተጫራቾች በግልጽ ጨረታ አወዳድሮ ለመሸጥ ይፈልጋል።</p>
        </button>

        <div className="flex flex-row gap-4 item-center">
          <button
            // onClick={() => handleListingDelete(listing._id)}
            className="text-red-700 uppercase"
          >
            Delete
          </button>
          <Link>
            <button className="text-green-700 uppercase">Edit</button>
          </Link>
        </div>
      </div>

      <div
        // key={listing._id}
        className="border rounded-lg p-3 flex justify-between items-center gap-4 bg-white hover:bg-gray-100 ease-in-out duration-300"
      >

        <button
          className="text-slate-700 font-semibold  hover:underline truncate ml-4 "
        //   to={`/listing/${listing._id}`}
        >
          <p>ግልጽ ጨረታ፦ ኮሜርሻል ኖሚኒስ ኃ.የተ.የግል ማህበር ያገለገሉ የጽዳት ማሽነሪዎች ፣ የቢሮ ፈርኒቸሮች ፣ የተለያዩ ኮምፒውተር እና ሌሎች ዕቃዎች ህጋዊ የንግድ ፍቃድ ያላቸውን ተጫራቾች በግልጽ ጨረታ አወዳድሮ ለመሸጥ ይፈልጋል።</p>
        </button>

        <div className="flex flex-row gap-4 item-center">
          <button
            // onClick={() => handleListingDelete(listing._id)}
            className="text-red-700 uppercase"
          >
            Delete
          </button>
          <Link>
            <button className="text-green-700 uppercase">Edit</button>
          </Link>
        </div>
      </div>

    {/* ))} */}
  </div>
{/* )} */}
</div>
  )
}

export default TendList