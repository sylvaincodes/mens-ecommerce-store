import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
  import Image from "next/image";

interface Card{
  title: string;
  price: number;
  discount: number;
  images: string;
}  

export default function CustomTabsContentItems({title, activeTab, data}: 
  { title: string; activeTab: string; data: Card[] }) {
  return (
    <div className={`${activeTab === title ? "flex" : "hidden"}`}>
        <div className="p-8">
          
          <Carousel>
            <CarouselContent>  
              {
                data.map((item, idx)=>{
                    return <CarouselItem key={idx} className="basis-3/3 md:basis-2/3 lg:basis-1/3">
                    <Image src={item.images}  width="300" height="300" alt="carousel products" />
                    
                    <div className='flex flex-col py-4 gap-y-4'>
                      <h1 className='capitalize font-normal text-lg 
                      font-bold'>{item.title}</h1>
                      <div className="text-lg ">
                        <span className='font-bold tracking-tight'>${item.price}</span> 
                      </div>
                    </div>
                    </CarouselItem>
                })
              }
            </CarouselContent>
            <CarouselPrevious/>
            <CarouselNext />
          </Carousel>

        </div>
      </div>
  )
}
