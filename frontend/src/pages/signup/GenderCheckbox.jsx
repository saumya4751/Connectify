import React from 'react'

const GenderCheckbox = () => {
  return (
    <div className='flex'>
        <div className='form-control'>
            <label className={`label gap-2 curson-pointer`}>
                <span className='label-text'>Male</span>
                <input type="checkbox" className='checkbox border-slate-900' />
            </label>
        </div>
        <div className='form-control'>
        <label className={`label gap-2 curson-pointer`}>
                <span className='label-text'>Female</span>
                <input type="checkbox" className='checkbox border-slate-900' />
            </label>
        </div>
    </div>
  )
}

export default GenderCheckbox


// Starter Code
// import React from 'react'

// const GenderCheckbox = () => {
//   return (
//     <div className='flex'>
//         <div className='form-control'>
//             <label className={`label gap-2 curson-pointer`}>
//                 <span className='label-text'>Male</span>
//                 <input type="checkbox" className='checkbox border-slate-900' />
//             </label>
//         </div>
//         <div className='form-control'>
//         <label className={`label gap-2 curson-pointer`}>
//                 <span className='label-text'>Female</span>
//                 <input type="checkbox" className='checkbox border-slate-900' />
//             </label>
//         </div>
//     </div>
//   )
// }

// export default GenderCheckbox