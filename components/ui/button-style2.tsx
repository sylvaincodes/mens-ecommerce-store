"use client";
import Link from "next/link";
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
				"content -hover:translate-y-[3px] hover:shadow-lg after:inline-block after:h-full  after:w-full after:rounded-lg absolute top-0 left-0 -z-1 transition-all",
				classPlus,
			)}
		>
			{children}
		</button>
	);
};
