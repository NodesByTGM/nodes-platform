import { Navigation, Pagination } from "swiper/modules"
import { CommunityItem, CustomSwiper, GemItem, MovieItem, TrendingItem } from "../../components"
import { Link } from "react-router-dom"
import AppConfig from "../../utilities/config"

function Dashboard() {
    return (
        <div>

            <h1 className="text-4xl font-semibold">Welcome to Nodes, Jane</h1>
            <p className="text-lg">Checkout the blah blah blah blah blah blah</p>
            <hr className="my-5" />


            <h4 className="text-lg font-medium">Trending</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

            <div className="py-5">
                <CustomSwiper
                    // centeredSlides={true}
                    slideContainerClass="!w-[350px] !h-[400px]"
                    modules={[Pagination, Navigation]}
                    navigation={true}
                    pagination={true}
                    breakpoints={{
                        1400: { slidesPerView: 4 },
                        800: { slidesPerView: 2 },
                    }}>
                    {Array(6).fill(null).map((_, i) =>
                        <div  key={i}>
                            <TrendingItem />
                        </div>
                    )}
                </CustomSwiper>
            </div>



            <div className="flex justify-between items-center border-b pb-5 mb-5">
                <h4 className="text-lg font-medium">Top movies</h4>
                <Link to={`${AppConfig.PATHS.Dashboard.Base}/Top Movies`}><p className="text-sm font-light">View all</p></Link>
            </div>

            <div className="py-5">
                <CustomSwiper
                    // centeredSlides={true}
                    slideContainerClass="!w-[350px]"
                    breakpoints={{
                        1400: { slidesPerView: 4 },
                        800: { slidesPerView: 2 },
                    }}>
                    {Array(6).fill(null).map((_, i) =>
                        <MovieItem key={i} />
                    )}
                </CustomSwiper>
            </div>


            <div className="flex justify-between items-center border-b pb-5 mb-5">
                <h4 className="text-lg font-medium">Hidden Gems</h4>
                <p className="text-sm font-light">View all</p>
            </div>

            <div className="py-5">
                <CustomSwiper
                    // centeredSlides={true}
                    slideContainerClass="!w-[350px]"
                    breakpoints={{
                        1400: { slidesPerView: 4 },
                        800: { slidesPerView: 2 },
                    }}>
                    {Array(6).fill(null).map((_, i) =>
                        <GemItem key={i} />
                    )}
                </CustomSwiper>
            </div>


            <div className="flex justify-between items-center border-b pb-5 mb-5">
                <h4 className="text-lg font-medium">Flashbacks</h4>
                <p className="text-sm font-light">View all</p>
            </div>

            <div className="py-5">
                <CustomSwiper
                    // centeredSlides={true}
                    slideContainerClass="!w-[350px]"
                    breakpoints={{
                        1400: { slidesPerView: 4 },
                        800: { slidesPerView: 2 },
                    }}>
                    {Array(6).fill(null).map((_, i) =>
                        <GemItem key={i} />
                    )}
                </CustomSwiper>
            </div>

            {/* See what’s happening in the community Open Community */}


            <div className="flex justify-between items-center border-b pb-5 mb-5">
                <h4 className="text-lg font-medium">See what’s happening in the community</h4>
                <p className="text-sm font-light">Open Community</p>
            </div>
            <div className="flex items-center gap-2 py-5">

                {Array(4).fill(null).map((_, i) =>
                    <CommunityItem key={i} />
                )}
            </div>


            <div className="flex justify-between items-center border-b pb-5 mb-5">
                <h4 className="text-lg font-medium">Collaboration Spotlights</h4>
                <p className="text-sm font-light">View all</p>
            </div>
            <div className="py-5">
                <CustomSwiper
                    // centeredSlides={true}
                    slideContainerClass="!w-[350px]"
                    breakpoints={{
                        1400: { slidesPerView: 4 },
                        800: { slidesPerView: 2 },
                    }}>
                    {Array(6).fill(null).map((_, i) =>
                        <GemItem key={i} />
                    )}
                </CustomSwiper>
            </div>


            <div className="flex justify-between items-center border-b pb-5 mb-5">
                <h4 className="text-lg font-medium">Birthdays</h4>
                <p className="text-sm font-light">View all</p>
            </div>
            <div className="py-5">
                <CustomSwiper
                    // centeredSlides={true}
                    slideContainerClass="!w-[350px]"
                    breakpoints={{
                        1400: { slidesPerView: 4 },
                        800: { slidesPerView: 2 },
                    }}>
                    {Array(6).fill(null).map((_, i) =>
                        <GemItem key={i} />
                    )}
                </CustomSwiper>
            </div>

        </div>
    )
}

export default Dashboard