import { ReactNode, useState } from 'react';

const Tooltip = ({ text, children }: { text: string | ReactNode | ReactNode[], children: ReactNode }) => {
    const [showTooltip, setShowTooltip] = useState(false);

    const handleMouseEnter = () => {
        setShowTooltip(true);
    };

    const handleMouseLeave = () => {
        setShowTooltip(false);
    };

    return (
        <div className="tooltip-container cursor-pointer overflow-auto" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            {children}
            {showTooltip && <div className="tooltip absolute mt-2 -ml-[280px] lg:ml-0 bg-white rounded-[5px] w-full max-w-[300px] lg:max-w-[530px] p-4 border z-50 text-sm text-tooltip shadow-normal">{text}</div>}
        </div>
    );
};

export default Tooltip;
