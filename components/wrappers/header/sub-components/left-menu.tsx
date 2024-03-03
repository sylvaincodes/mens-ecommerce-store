"use client"
import { Logo } from "@/components/ui/logo"
import Socials from "@/components/ui/socials"
import { ChevronRight , MenuIcon, X } from "lucide-react"
import Link from "next/link"
import { useState } from 'react'
import Menu from "./menu"

export const LeftMenu = () => {
  
  const [openMainMenu, setOpenMainMenu] = useState<boolean>()
  const handleclick = () => {
    setOpenMainMenu(!openMainMenu)
  }
  
  return (
    <div>
        <button onClick={handleclick}>
                <MenuIcon size="42"/>
        </button>

        {/* left menu */}
        <div className={`top-0 left-0 z-20  fixed min-h-screen bg-white text-black 
          shadown-lg transition-all easy-in duration-800 ${openMainMenu ? "translate-x-0" :  "-translate-x-full"}`}>

            <div className="p-8 flex flex-col gap-y-16">
              <button onClick={() => setOpenMainMenu(!openMainMenu)}>
                  <X size={42} color="gray" />
              </button>

              <Logo/>

              <Menu/>

              <Socials classPlus="mt-20"/>

            </div>

        </div>
    </div>
  );
}
