"use client"
import { Logo } from "@/components/ui/logo"
import Socials from "@/components/ui/socials"
import { ChevronRight , MenuIcon, X } from "lucide-react"
import Link from "next/link"
import { useState } from 'react'

export const Menu = () => {
  
  const [openMainMenu, setOpenMainMenu] = useState<boolean>()
  const handleclick = () => {
    setOpenMainMenu(!openMainMenu)
  }
  
  return (
    <div>
        <button onClick={handleclick}>
                <MenuIcon size="42"/>
        </button>

        {/* mobile menu */}
        <div className={`top-0 left-0 z-20  fixed min-h-screen bg-white text-black 
          shadown-lg transition-all easy-in duration-800 ${openMainMenu ? "translate-x-0" :  "-translate-x-full"}`}>

            <div className="p-8 flex flex-col gap-y-16">
              <button onClick={() => setOpenMainMenu(!openMainMenu)}>
                  <X size={42} color="gray" />
              </button>

              <Logo/>

              <div>
                <nav>
                  <ul className="flex flex-col gap-y-8 capitalize ">
                    <li>
                      <Link href="/" className=" hover:text-primary-800">
                        home                      
                      </Link>
                    </li>
                    <li className="group relative">
                      <Link href="/" className="flex items-center text-black hover:text-primary-800">
                        category
                        <button className="ms-auto">
                          <ChevronRight color="gray"/>
                        </button>
                      </Link>
                      <div className="hidden absolute md:-right-[230px] md:-top-2 h-fit w-[230px] pl-12  
                      bg-white p-4 transition-all 
                      group-hover:flex left-0 top-10">
                          <ul className="flex flex-col gap-y-4">
                            <li><Link href="/" className="hover:text-primary-800">
                            dress 
                            
                            </Link></li>
                            
                            <li><Link href="/" className="hover:text-primary-800">
                            shoes 
                            
                            </Link></li>
                          </ul>
                      </div>
                    </li>
                    
                    <li>
                      <Link href="/" className="text-black hover:text-primary-800">
                        shop
                   </Link>
                    </li>
                  </ul>
                </nav>
              </div>

              <Socials classPlus="mt-20"/>

            </div>

        </div>
    </div>
  );
}
