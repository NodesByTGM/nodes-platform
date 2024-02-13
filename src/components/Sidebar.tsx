import { Box, Briefcase, Globe, Home, User } from "react-feather"
import { Link } from "react-router-dom"
import AppConfig from "../utilities/config"

function Sidebar() {

    const paths = [
        { name: 'Home', icon: <Home />, path: AppConfig.PATHS.Dashboard.Base },
        { name: 'Profile', icon: <User />, path: AppConfig.PATHS.Dashboard.Profile },
        { name: 'Community', icon: <Globe />, path: AppConfig.PATHS.Community },
        { name: 'For Business', icon: <Briefcase />, path: '/' },
        { name: 'Subscriptions', icon: <Box />, path: '/' },
    ]
    return (
        <div className="lg:w-[300px] transition-all duration-300 border-r border-t ">
            {/* <div className="mt-3 pb-4 border-b p-3 mb-4">
                <Menu />
            </div> */}
            <div className="flex flex-col gap-5 p-3 border-r mt-2">

                {paths.map((r, i) => (
                    <Link to={r.path} className="flex gap-4 items-center hover:bg-[#F2F3F2] transition-all p-2 rounded" key={i}>
                        <div>{r.icon}</div>
                        <div className="hidden lg:block">{r.name}</div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Sidebar