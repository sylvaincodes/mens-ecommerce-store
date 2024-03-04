import React, { ReactNode } from 'react'

export const ButtonStyle3 = ({children}: {children: ReactNode}) => {
  return (
    <button className='capitalize text-sm'>
        { children }
        <div className='h-[2px] w-16 bg-gray-600'></div>
    </button>
  )
}
