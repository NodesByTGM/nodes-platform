import { ReactNode, useState } from 'react';

import { Tooltip as ReactTooltip, PlacesType } from 'react-tooltip'

interface TooltipProps {
    text: string | ReactNode | ReactNode[] | (() => ReactNode | ReactNode[]),
    children: ReactNode,
    place?: PlacesType,
    id: string
}
const Tooltip = ({ text, children, id, place = "top" }: TooltipProps) => {


    return (
        <div className='cursor-pointer'>
            <div id={id}>{children}</div>
            <ReactTooltip
                anchorSelect={`#${id}`}
                place={place}
                className="max-w-[300px] lg:max-w-[530px] !bg-white p-4 border z-50 text-sm !text-tooltip shadow-normal !opacity-100">
                {typeof (text) === 'function' ? text() : text}
            </ReactTooltip>
        </div>
    );
};

export default Tooltip;
