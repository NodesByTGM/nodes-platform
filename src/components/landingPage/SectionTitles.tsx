import React from 'react'

export default function SectionTitles({title='Title', description='Text', titleClass=''}) {
  return (
    <div className='flex flex-col gap-6'>
        <h3 className={`font-medium text-[#212121] text-[40px] ${titleClass}`}>{title}</h3>

        <span className=" text-[#212121] font-normal text-[24px]">{description}</span>
    </div>
  )
}
