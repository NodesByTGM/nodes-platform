import { useState } from "react"
import { Bell, ChevronDown, Mail, Menu, Smartphone } from "react-feather"
import { Link } from "react-router-dom"
import { Button, Searchbar } from "."
import { useAuth } from "../context/hooks"
import Avatar from "./Avatar"

function Header() {
    const { user } = useAuth()
    const [searchTerm, setSearchTerm] = useState("")
    return (
        <div className="py-2 pr-4  flex justify-between items-center border-b">
            <div className="flex gap-4 items-center">
                <Menu className="w-[50px] cursor-pointer"/>
                <div className="flex items-center gap-2">
                    <Link to={"/"}>
                        <div className="flex gap-2 text-2xl font-semibold cursor-pointer items-center">
                            <img src="/logo.svg" alt="" className="h-8 w-9" />
                            <span className="text-primary text-2xl font-semibold">Nodes</span>
                        </div>
                    </Link>
                    <Searchbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                </div>
            </div>

            <div className="flex gap-2 items-center">
                <Button theme={'secondary'} className="!border-grey-dark" size={'sm'}>
                    <Smartphone className="w-4" />
                    <span>Get app</span>
                </Button>
                <Bell className="w-8 text-primary" />
                <Mail className="w-8 text-primary" />
                <div className="flex items-center">
                    <Avatar src="/img/avatar.jpeg" />
                    <ChevronDown className="cursor-pointer text-primary" />
                </div>
            </div>
        </div>
    )
}

export default Header

// function Hea2der() {
//     const { user } = useAuth()
//     return (
//         <div className="p-4 px-10 flex justify-between items-center">
//             <div className="flex gap-10 items-center">
//                 <MenuIcon />
//                 <Link to={"/"}>
//                     <div className="flex gap-2 text-2xl font-semibold cursor-pointer items-center">
//                         <img src="/logo-black.svg" alt="" />
//                         <span>Nodes</span>
//                     </div>
//                 </Link>
//             </div>
//             <div className="flex gap-4 items-center font-medium">
//                 <div className="cursor-pointer px-4 border-r border-black">Community</div>
//                 {user ? (
//                     <div className="cursor-pointer h-8 w-8 text-sm flex items-center justify-center bg-primary text-white rounded-full">
//                         {getInitials(user.name)}
//                     </div>
//                 ) : null}
//                 <Link to={AppConfig.PATHS.Upgrades.Business.Base}><div className="cursor-pointer">For Business</div></Link>
//                 <Link to={AppConfig.PATHS.Upgrades.Talent.Base}><div className="cursor-pointer">For Talent</div></Link>
//             </div>
//         </div>
//     )
// }