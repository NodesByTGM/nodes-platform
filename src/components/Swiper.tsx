import { Children, ReactElement, ReactNode, cloneElement, isValidElement } from 'react';
import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react';

interface CustomerSwiperProps extends SwiperProps {
    children: ReactNode | ReactNode[] | ReactElement | ReactElement[]
}
function CustomerSwiper({
    spaceBetween = 50,
    slidesPerView = 3,
    children,
    ...rest
}: CustomerSwiperProps) {

    return (
        <div>
            <Swiper
                spaceBetween={spaceBetween}
                slidesPerView={slidesPerView}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                {...rest}
            >

                {Children.map(children, (child, index) => {
                    if (isValidElement(child)) {
                        // Assuming ChildComponent is the only type of child you expect
                        return (
                            <SwiperSlide key={index}>
                                {cloneElement(child, {
                                    key: `AdditionalProp-${index}`,
                                })}
                            </SwiperSlide>
                        );
                    }
                    return child;
                })}
                <SwiperSlide>Slide 1</SwiperSlide>

            </Swiper>
        </div>
    )
}

export default CustomerSwiper