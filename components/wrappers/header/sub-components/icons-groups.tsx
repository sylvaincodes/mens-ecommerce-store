import { ShoppingCart } from "lucide-react"
import Link from "next/link"

export const IconsGroups = ({theme}: {theme: string}) => {
  return (
  <div className='inline-flex'>
    <Link href="/" className="relative">
       <span className={`absolute text-4xl -top-3 
       -right-4 h-[24px] w-[24px] ${theme === "light" ? "text-white" : "text-black" } rounded-full p-2 
       flex items-center text-center justify-center font-bold`}>0</span>
       <ShoppingCart  size="32"/>
    </Link>
  </div>
  )
}
