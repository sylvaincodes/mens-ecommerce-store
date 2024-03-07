import { courgetteFont } from '@/app/fonts';
import { cn } from '@/lib/utils';
import Link from 'next/link'
import React from 'react'

export default function CustomTabsItems({
    activeTab,
    setActiveTab,
    title
  }: {
    activeTab: string;
    setActiveTab: any;
    title: string
  }) {

    const handleclick = (value: string) => {
        setActiveTab(value);
    };

  return (
    <li className={cn('me-2', courgetteFont.className) }>
          <button
            onClick={() => handleclick(title)}
            href="#"
            className={`capitalize inline-block text-2xl p-4 
                   rounded-t-lg 
                  dark:hover:text-gray-600 font-bold  ${
                    activeTab === title ? "text-primary-800 border-primary-900 border-b-2 " : ""
                  }`}
          >
            {title}
          </button>
        </li>
  )
}
