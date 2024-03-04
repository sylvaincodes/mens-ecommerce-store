"use client";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

export const ButtonStyle = ({
	children,
	classPlus,
	href,
}: {
	children: React.ReactNode;
	classPlus?: string;
	href?: string;
}) => {
	const router = useRouter();
	const handleclick = (e: any) => {
		e.preventDefault();
		router.push(`/${href}`);
	};
	return (
		<button
			onClick={handleclick}
			className={cn(
				"z-1 w-fit h-20 tracking-widest inline-flex justify-center text-2xl items-center gap-x-4 p-4 text-black bg-white z-[1] uppercase shadow-sm transition-all relative hover:text-white hover:primary-800 before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0  before:bg-primary-800 before:-z-10 before:duration-300 before:ease-out before:w-0 before:h-0 hover:before:w-full hover:before:h-2/4 hover:before:transition-all after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0 after:w-0 after:bg-primary-800   hover:after:h-2/4 hover:after:w-full after:duration-500 after:ease-out after:-z-10   dark:bg-black dark:text-white hover:dark:text-white border-none",
				classPlus,
			)}
		>
			{children}
		</button>
	);
};
