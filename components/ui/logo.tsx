import { courgetteFont } from '@/app/fonts'
import { cn } from '@/lib/utils'
import Link from 'next/link'

export const Logo = ({classPlus}: { classPlus?: string}) => {
  return (
    <div className={`${classPlus}`}>
        <div className={courgetteFont.className}>
                <Link href="/" className={cn('text-4xl font-bold tracking-tight capitalize')}>
                  women are cool .
                </Link>
        </div>
    </div>
  )
}
