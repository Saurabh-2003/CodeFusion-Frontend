import React from 'react'
import CreateRoom from './CreateRoom'
import EnterRoom from './EnterRoom'

const CreateOrJoin = ({setUserName}) => {
  return (
    <div className='h-[90lvh] grid place-items-center'>
        
        <div className='w-1/2 rounded-3xl grid place-items-center grid-cols-1 bg-primary py-10'>
            <h1 className='text-4xl text-stone-100 mb-10 '>Create Or Join a Room</h1>
            <CreateRoom  setUserName={setUserName}/>
            <span className='text-3xl text-stone-100 my-6'> Or</span>
            <EnterRoom setUserName={setUserName}/>
        </div>
    </div>
  )
}

export default CreateOrJoin