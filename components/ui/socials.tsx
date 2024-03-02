import { cn } from '@/lib/utils'
import { Github, Linkedin, Twitter, Youtube } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function Socials({classPlus}:{ classPlus?: string}) {
  return (
    <div className={cn('flex gap-x-12', classPlus) }>
        
        <Link href="https://www.youtube.com/channel/UCmPmOdDw941pdi8YmIPjyEA" className='hover:text-primary-800'>
        <Youtube />
        </Link>
        
        <Link href="https://twitter.com/sylvaincodes" className='hover:text-primary-800'>
        <Twitter />
        </Link>
        
        <Link href="https://github.com/sylvaincodes" className='hover:text-primary-800'>
        <Github />
        </Link>
        
        <Link href="https://www.linkedin.com/in/sylvain-olympio-adande" className='hover:text-primary-800'>
        <Linkedin />
        </Link>
    </div>
  )
}
