import { Button } from '@/components/ui/button'
import { Column } from '@/components/ui/column'
import { Container } from '@/components/ui/container'
import { Heading } from '@/components/ui/heading'
import { Row } from '@/components/ui/row'
import Image from 'next/image'
import React from 'react'

export default function CtaOne() {
  return (

    <section className='mt-20'>
        <Container>
            <Heading>
                Best collection
            </Heading>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 
            gap-4 justify-items-center pt-10'> 
                <div className='cursor-pointer group overflow-hidden relative'>
                    <Image className='transition easy-out duration-800 group-hover:scale-110' src="/images/cta/1.jpg" width="500" height="500" alt="cta" />
                    <div className="absolute  top-20 left-24  ">
                        <div className="flex flex-col gap-2">
                        <h1 className='text-xl text-white capitalize font-bold'>Up to 40% Off</h1>
                        <Button variant="primary">Shop Now</Button>
                        </div>
                    </div>
                </div>
                <div className='cursor-pointer group overflow-hidden relative'>
                    <Image className='transition easy-out duration-800 group-hover:scale-110' src="/images/cta/2.jpg" width="500" height="500" alt="cta" />
                    <div className="absolute  top-20 left-24  ">
                        <div className="flex flex-col gap-2">
                        <h1 className='text-xl text-white capitalize font-bold'>Up to 40% Off</h1>
                        <Button variant="primary">Shop Now</Button>
                        </div>
                    </div>
                </div>
                <div className='cursor-pointer group overflow-hidden relative'>
                    <Image className='transition easy-out duration-800 group-hover:scale-110' src="/images/cta/8.jpg" width="500" height="500" alt="cta" />
                    <div className="absolute  top-20 left-24  ">
                        <div className="flex flex-col gap-y-2">
                            <h1 className='text-xl text-white capitalize font-bold'>Up to 40% Off</h1>
                            <Button variant="primary">Shop Now</Button>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    </section>
  )
}
