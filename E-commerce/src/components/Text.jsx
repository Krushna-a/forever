import React from 'react'

const Text = ({text1,text2}) => {
  return (
    <div className='w-full flex justify-center items-center my-6'>
      <p className='bg-grey-900 opacity-50 font-medium text-2xl pr-3'>{text1}</p>
      <p className='bg-black-800 text-2xl pr-3 font-medium'>{text2}</p>
      <p className='w-15 bg-black h-[2px] border'></p>
    </div>
  )
}

export default Text
