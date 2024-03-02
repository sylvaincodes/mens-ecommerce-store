import { cn } from "@/lib/utils";

export const Row = ({children,classPlus}: {children: React.ReactNode; classPlus?: string }) => {
  return (
    <div className={cn('flex items-center', classPlus)}>
        {children}
    </div>
  )
}