import { cn } from "@/lib/utils";

export const Column = ({children,classPlus}: {children: React.ReactNode; classPlus?: string }) => {
  return (
    <div className={cn('flex flex-col', classPlus)}>
        {children}
    </div>
  )
}