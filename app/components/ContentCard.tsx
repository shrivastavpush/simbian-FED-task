import React from "react";

interface ContentCardProps {
    title: string;
    icon: React.ReactNode;
    className?: string;
}

const ContentCard: React.FC<ContentCardProps> = ({ title, icon, className }) => {
    return (
        <div className="w-[400px] flex items-center gap-4 p-3 bg-blue-500/10 backdrop-blur-md rounded-md bg-clip-padding backdrop-filter border border-gray-100">
            <div className={`flex items-center justify-center w-10 h-10 rounded-md p-2 ${className}`}>
                {icon}
            </div>
            <span className="text-white text-base font-medium leading-snug"> {title}
            </span>
        </div>
    );
};

export default ContentCard