import React from 'react'

const Loading = () => {
  return (
    <main className='h-lvh w-lvw grid place-items-center'>
      <div className='h-10 w-10 rounded-full border-4 animate-spin border-gray-50/20'>
        <div className='h-[5px] w-[5px] bg-emerald-300 rounded-full'></div>
      </div>
    </main>
  )
}

export default Loading