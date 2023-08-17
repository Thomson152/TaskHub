import React from 'react'
import {AiFillDelete} from  'react-icons/ai'
import { useDispatch } from 'react-redux';
import {deleteTask} from '../features/Post'  
const List = ({data, isLoading}) => {
  const dispatch = useDispatch();
  return (
    <div className='max-w-[500px] rounded-md shadow-md px-5 md:px-10 text-white  py-8 bg-[#161722]'>
    {isLoading ? <h1>LOADING</h1> : (
      <>
        {data.map((item) => (
          <div key={item.id} className="py-5 border-b text-lg flex justify-between ">
            <p>{item.title}
            </p>
            <AiFillDelete onClick={()=> { dispatch (deleteTask(item.id))}}  className='text-red-500'/>
          </div>
        ))}

      </>
    )}



  </div>
  )
}

export default List