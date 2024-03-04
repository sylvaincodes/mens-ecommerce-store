import React from 'react'
import { Column } from '../column'
import { cn } from '@/lib/utils'

export const Heading = ({children,classPlus}: {children: React.ReactNode, classPlus?: string} ) => {
  return (
    <Column classPlus='justify-center items-center gap-y-4'>
                <h1 className={cn('capitalize text-black font-extrabold text-4xl', classPlus)}>
                        {children}
                    </h1>
                <div className='h-[2px] w-16 bg-gray-600'></div>
    </Column>
  )
}
