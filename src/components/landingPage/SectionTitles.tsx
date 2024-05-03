import React from 'react'

export default function SectionTitles({title='Title', description='Text', titleClass='', descriptionClass=''}) {
  return (
    <div className='flex flex-col gap-6'>
        <h3 className={`font-medium text-[#212121] text-[24px] md:text-[40px] ${titleClass}`}>{title}</h3>

        <span className={`${descriptionClass} text-[#212121] font-normal text-[16px] md:text-[24px]`}>{description}</span>
    </div>
  )
}
