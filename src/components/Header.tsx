import { Link } from "react-router-dom"
import { MenuIcon } from "../assets/svg"
import AppConfig from "../utilities/config"
import { useAuth } from "../context/hooks"
import { getInitials } from "../utilities/common"

function Header() {
    const { user } = useAuth()
    return (
        <div className="p-4 px-10 flex justify-between items-center">
            <div className="flex gap-10 items-center">
                <MenuIcon />
                <div className="flex gap-2 text-2xl font-semibold cursor-pointer items-center">
                    <img src="/logo-black.svg" alt="" />
                    <span>Nodes</span>
                </div>
            </div>
            <div className="flex gap-4 items-center font-medium">
                <div className="cursor-pointer px-4 border-r border-black">Community</div>
                {user ? (
                    <div className="cursor-pointer h-8 w-8 text-sm flex items-center justify-center bg-primary text-white rounded-full">
                        {getInitials(user.name)}
                    </div>
                ) : null}
                <Link to={AppConfig.PATHS.Upgrades.Business.Base}><div className="cursor-pointer">For Business</div></Link>
                <Link to={AppConfig.PATHS.Upgrades.Talent.Base}><div className="cursor-pointer">For Talent</div></Link>
            </div>
        </div>
    )
}

export default Header