import { ArrowRight } from "react-feather"
import { Link } from "react-router-dom"
import AppConfig from "../../utilities/config"

function MovieItem() {
    return (
        <div
            className="h-[480px] w-[360px] rounded bg-cover bg-center text-white"
            style={{ backgroundImage: `url('/img/movieImg.png')`, }}>
            <div className="bg-darkgradient p-5 h-full  flex flex-col justify-end">
                <h3 className="w-[220px] md:w-[280px] text-ellipsis text-nowrap overflow-hidden text-xl font-medium h-[30px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
                </h3>
                <p className="w-[220px] md:w-[280px] text-ellipsis text-nowrap overflow-hidden font-medium h-[30px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
                </p>
                <div className="cursor-pointer flex gap-2 items-center text-md">
                    <Link to={`${AppConfig.PATHS.Dashboard.Posts.Base}/hbjhbjshbjd`}><span>Learn more</span></Link>
                    <ArrowRight className="w-4 mt-[2px]" />
                </div>
            </div>
        </div>
    )
}

export default MovieItem