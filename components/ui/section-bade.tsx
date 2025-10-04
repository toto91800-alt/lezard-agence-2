import React from 'react'

interface Props {
    title: string;
}

export const SectionBadge = ({ title }: Props) => {
    return (
        // <div className="relative inline-flex h-8 overflow-hidden rounded-full p-[1.5px] focus:outline-none select-none">
        //     <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#1d4ed8_0%,#a5b4fc_50%,#1d4ed8_100%)]" />
        //     <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-4 py-1 text-sm font-medium text-white backdrop-blur-3xl">
        //         {title}
        //     </span>
        // </div>
        <div className="px-4 py-1 rounded-full bg-primary/20">
        <div className="bg-[linear-gradient(110deg,#f97316,45%,#fcd34d,55%,#f97316)] bg-[length:250%_100%] bg-clip-text animate-background-shine text-transparent font-medium text-sm">
            {title}
        </div>
    </div>
    
    )
};
