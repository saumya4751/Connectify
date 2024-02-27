import React from 'react'

const Conversation = () => {
  return (
    <>
       <div className='flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer'>
          <div className='avatar online'> 
            <div className='w-12 rounded-full'>
              <img 
                src="https://cdn4.iconfinder.com/data/icons/eon-ecommerce-i-1/32/user_profile_man-512.png" alt="user avatar" 
              />

            </div>
          </div> 

          <div className='flex flex-col flex-1'>
            <div className='flex gap-3 justify-between'>
              <p className='font-bold text-gray-200'>John Doe</p>
              <span className='text-xl'>Emoji</span>
            </div>

          </div>
        </div> 


        <div className='divided my-0 py-0 h-1' />

         
    </>
  )
}

export default Conversation





// starter code
// import React from 'react'
// const Conversation = () => {
//   return (
//     <>
//        <div className='flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer'>
//           <div className='avatar online'> 
//             <div className='w-12 rounded-full'>
//               <img 
//                 src="https://cdn4.iconfinder.com/data/icons/eon-ecommerce-i-1/32/user_profile_man-512.png" alt="user avatar" 
//               />

//             </div>
//           </div> 

//           <div className='flex flex-col flex-1'>
//             <div className='flex gap-3 justify-between'>
//               <p className='font-bold text-gray-200'>John Doe</p>
//               <span className='text-xl'>Emoji</span>
//             </div>

//           </div>
//         </div> 


//         <div className='divided my-0 py-0 h-1' />

         
//     </>
//   )
// }

// export default Conversation