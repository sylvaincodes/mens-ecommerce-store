import React from 'react'

export const Input = ({type= "text",name}: {name: string; type: string}) => {
  return (
    <div className="w-full">
        <input className='focus:ring-0 text-center w-full p-4 active:border-0 focus:border-0 focus:rounded-none' type="text" name={name} id={name} placeholder={name} />
    </div>
  )
}
