import React from 'react'

const List = () => {
  return (
    <div className='max-w-[500px] rounded-md shadow-md px-5 md:px-10 text-white  py-8 bg-[#161722]'>
    {loading ? <h1>LOADING</h1> : (
      <>
        {data.map((item) => (
          <div key={item._id} className="py-5 border-b ">
            <p>{item.task}
            </p>
          </div>
        ))}

      </>
    )}



  </div>
  )
}

export default List