import clsx from 'clsx';
import { Children, ReactElement, ReactNode, cloneElement, isValidElement } from 'react';
import { ChevronLeft, ChevronRight } from 'react-feather';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react';

interface CustomSwiperProps extends SwiperProps {
    children: ReactNode | ReactNode[] | ReactElement | ReactElement[],
    slideContainerClass?: string,
    pagination?: boolean,
    navigation?: boolean,
}
function CustomSwiper({
    spaceBetween = 50,
    children,
    slideContainerClass = '',
    modules,
    navigation,
    pagination,
    ...rest
}: CustomSwiperProps) {
    return (
        <div>
            <Swiper
                loop={true}
                // autoplay={{ delay: 2000 }}
                spaceBetween={spaceBetween}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                modules={[Autoplay, Navigation, Pagination]}
                navigation={navigation ? {
                    prevEl: ".prev",
                    nextEl: ".next",
                } : undefined}
                pagination={pagination ? {
                    el: '.custom-swiper-pagination',
                    clickable: true,
                    renderBullet: (_, className) => {
                        return (
                            `<span class="${clsx('h-2 w-2 rounded-full bg-grey-dark block', className)}"></span>`
                        );
                    },
                } : undefined}
                breakpoints={{
                    1400: { slidesPerView: 4 },
                    800: { slidesPerView: 2 },
                    480: { slidesPerView: 1 }

                }}
                className='!w-[280px] lg:!w-[1000px]'
                {...rest}
            >

                {Children.map(children, (child, index) => {
                    if (isValidElement(child)) {
                        // Assuming ChildComponent is the only type of child you expect
                        return (
                            <SwiperSlide key={index} className={clsx('overflow-hidden !flex lg:!justify-center !w-[300px] md:!w-[350px]', slideContainerClass)}>
                                {cloneElement(child, {
                                    key: `AdditionalProp-${index}`,
                                })}
                            </SwiperSlide>
                        );
                    }
                    return child;
                })}

            </Swiper>

            <div className="flex justify-between items-center mt-10 w-full">
                {pagination ? (<div className='custom-swiper-pagination flex gap-2 items-center'></div>) : null}

                {navigation ? (
                    <div className='custom-swiper-navigation flex items-center gap-[10px]'>
                        <div className='prev cursor-pointer rounded-full w-10 h-10 border flex items-center justify-center text-grey-dark'>
                            <ChevronLeft className='text-grey-dark text-2xl' />
                        </div>
                        <div className='next cursor-pointer rounded-full w-10 h-10 border flex items-center justify-center text-grey-dark'>
                            <ChevronRight className=' text-grey-dark text-2xl' />
                        </div>
                    </div>
                ) : null}
            </div>
        </div>
    )
}

export default CustomSwiper