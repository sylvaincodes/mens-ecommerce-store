
"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import ModalVideo from "react-modal-video";

export const CtaThree = () => {
    
  const [modalStatus, isOpen] = useState(false);

  return (
    <section className='relative mt-20'>
        
        <div className='relative grid md:grid-cols-2'>

            <div className=' flex flex-col gap-y-12' style={{
                backgroundImage: `url('/images/cta/9.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'bottom',
                height: '400px'
                }}>
                
            </div>
            
            <div className='absolute left-[46%] inset-y-1/3 md:right-[46%]  md:top-1/3  flex'>
                <button onClick={() => isOpen(true)}>
                    <Image src="/images/cta/play.png" 
                    width="100" height="100" alt='cta' />
                </button>
            </div>
            
            <div className='flex flex-col gap-y-12 inset-1/2' style={{
                backgroundImage: `url('/images/cta/10.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'bottom',
                height: '400px'
                }}> 
            </div>

        </div>
        
        <div className="absolute top-0">

            <ModalVideo
            channel="youtube"
            isOpen={modalStatus}
            videoId="feOScd2HdiU"
            onClose={() => isOpen(false)}
            />

        </div>

    </section>
  )
}
