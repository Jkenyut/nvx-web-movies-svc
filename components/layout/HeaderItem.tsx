import React from "react";

function HeaderItem({title, Icon}: { title: string; Icon: any }) {
    return (
        <div className="flex flex-col items-center group cursor-pointer w-12 sm:w-20 hover:text-cyan-400 transition-colors duration-200">
            <Icon className="h-6 mb-1 transition-transform duration-200 group-hover:scale-110 group-hover:drop-shadow-[0_0_5px_rgba(34,211,238,0.8)]"/>
            <p className="opacity-0 group-hover:opacity-100 tracking-widest text-[10px] font-medium transition-opacity duration-300 transform translate-y-1 group-hover:translate-y-0 uppercase">{title}</p>
        </div>
    );
}

export default HeaderItem;
