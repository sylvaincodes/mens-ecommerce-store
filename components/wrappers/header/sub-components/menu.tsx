import { ChevronRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function Menu() {
  return (
    <div>
                <nav>
                  <ul className="flex flex-col gap-y-8 capitalize ">
                    <li>
                      <Link href="/" className="hover:text-primary-800">
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
                      <div className="hidden absolute sm:left-0 sm:top-5 -md:right-[230px] -md:top-2 h-fit w-[230px] pl-12  
                      bg-white p-4 transition-all 
                      group-hover:flex">
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
  )
}
