import { Row } from '@/components/ui/row'
import Image from 'next/image'
import React from 'react'

export default function CtaTwo() {
  return (
    <section className='mt-20'>
        <Row classPlus='min-w-screen'>
            <div className='grid grid-cols-5'>

                <div className='group overflow-hidden'>
                    <Image className='cursor-pointer transition-all duration-500 easy-in group-hover:scale-110'  src="/images/cta/3.jpg" width="300"  height="300" alt="ct" />
                </div>

                <div className='group overflow-hidden'>
                    <Image className='cursor-pointer transition-all duration-500 easy-in group-hover:scale-110' src="/images/cta/4.jpg" width="300"  height="300" alt="ct" />
                </div>

                <div className='group overflow-hidden'>
                    <Image className='cursor-pointer transition-all duration-500 easy-in group-hover:scale-110' src="/images/cta/5.jpg" width="300"  height="300" alt="ct" />
                </div>

                <div className='group overflow-hidden'>
                    <Image className='cursor-pointer transition-all duration-500 easy-in group-hover:scale-110' src="/images/cta/6.jpg" width="300"  height="300" alt="ct" />
                </div>

                <div className='group overflow-hidden'>
                    <Image className='cursor-pointer transition-all duration-500 easy-in group-hover:scale-110' src="/images/cta/7.jpg" width="300"  height="300" alt="ct" />
                </div>

            </div>
        </Row>
    </section>
  )
}
