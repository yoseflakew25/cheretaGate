import React from 'react'

// const Sidebar = ({ handleSubmit, sidebardata, handleChange }) => {
    const Sidebar = () => {
  return (
      <div className="p-8 bg-gray-50 border-b-2 md:border-r-2  sticky">
        <form className="flex flex-col gap-8">
          <div className="flex items-center gap-2">
            <input
              type="text"
              id="searchTerm"
              placeholder="Search Tenders..."
              className="border rounded-lg p-3 w-full"
            //   value={sidebardata.searchTerm}
            //   onChange={handleChange}
            />
          </div>
          <label className="font-semibold">Type:</label>
          <div className="flex-col">
            <div className="flex gap-2 p-2 bg-gray-100 rounded-lg my-1">
              <input
                type="radio"
                id="all"
                className="w-5"
                // onChange={handleChange}
                // checked={sidebardata.type === "all"}
              />
              <span>All</span>
            </div>
            <div className="flex gap-2 p-2 bg-gray-100 rounded-lg my-1">
              <input
                type="radio"
                id="rent"
                className="w-5"
                // onChange={handleChange}
                // checked={sidebardata.type === "rent"}
              />
              <span>Open</span>
            </div>
            <div className="flex gap-2 p-2 bg-gray-100 rounded-lg my-1">
              <input
                type="radio"
                id="sale"
                className="w-5"
                // onChange={handleChange}
                // checked={sidebardata.type === "sale"}
              />
              <span>Closed</span>
            </div>
           
          </div>
          {/* <label className="font-semibold">Amenities:</label>
          <div className="flex-col gap-2 items-center">
            <div className="flex gap-2 p-2 bg-gray-100 rounded-lg my-1">
              <input
                type="checkbox"
                id="parking"
                className="w-5"
                // onChange={handleChange}
                // checked={sidebardata.parking}
              />
              <span>Parking</span>
            </div>
            <div className="flex gap-2 p-2 bg-gray-100 rounded-lg my-1">
              <input
                type="checkbox"
                id="furnished"
                className="w-5"
                // onChange={handleChange}
                // checked={sidebardata.furnished}
              />
              <span>Furnished</span>
            </div>
          </div> */}
          <div className="flex flex-col items-start gap-2">
            <label className="font-semibold">Regions</label>
            <select
            //   onChange={handleChange}
              defaultValue={"created_at_desc"}
              id="sort_order"
              className="border w-80 rounded-lg p-3"
            >
              <option value="regularPrice_desc">Price high to low</option>
              <option value="regularPrice_asc">Price low to hight</option>
              <option value="createdAt_desc">Latest</option>
              <option value="createdAt_asc">Oldest</option>
            </select>

            
          </div>


          <div className="flex items-start flex-col gap-2">
            <label className="font-semibold">Category</label>
            <select
            //   onChange={handleChange}
              defaultValue={"created_at_desc"}
              id="sort_order"
              className="border w-80 rounded-lg p-3"
            >
              <option value="regularPrice_desc">Price high to low</option>
              <option value="regularPrice_asc">Price low to hight</option>
              <option value="createdAt_desc">Latest</option>
              <option value="createdAt_asc">Oldest</option>
            </select>

            
          </div>
          <button className="bg-primary opacity-75 text-white p-3 rounded-lg uppercase hover:opacity-100">
            Search
          </button>
        </form>
        </div>
      )

};

export default Sidebar