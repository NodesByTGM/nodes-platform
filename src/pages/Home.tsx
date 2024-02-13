import { Link, useNavigate } from "react-router-dom"
import { Button } from "../components"
import AppConfig, { AccountTypes } from "../utilities/config"
import { mainClient } from "../utilities/client"
import { useAuth } from "../context/hooks"
import { toast } from "react-toastify"
import { handleAxiosError } from "../utilities/common"

function Home() {
    const navigate = useNavigate()
    const { onLogout, user } = useAuth()

    const handleLogout = () => {
        mainClient.get(AppConfig.API_ENDPOINTS.Auth.LogoutURL)
            .then((r => {
                if (r.status === 200) {
                    onLogout()
                    toast.success(r.data.message)
                    navigate('/')
                } else
                    toast.error(r.data.message)
            }))
            .catch(e => {
                handleAxiosError(e)
            })
    }
    return (
        <div>
            <div className="mb-4">
                {user ? (
                    <p>You account is currently a {AccountTypes[user.type]} Account</p>
                ) : <p>Please login first</p>}
            </div>
            {/* <div className="flex flex-wrap gap-10 items-center">
                <Link to={AppConfig.PATHS.Auth.Login}>
                    <Button theme="secondary">Check Login</Button>
                </Link>
                <Link to={AppConfig.PATHS.Auth.Register}>
                    <Button theme="secondary">Check Sign Up</Button>
                </Link>
                <Link to={AppConfig.PATHS.Upgrades.Talent.Base}>
                    <Button theme="secondary">Check Updgrade to Talent</Button>
                </Link>
                <Link to={AppConfig.PATHS.Upgrades.Business.Base}>
                    <Button theme="secondary">Check Updgrade to Business</Button>
                </Link>
                <Link to={AppConfig.PATHS.Upgrades.Talent.Onboarding}>
                    <Button theme="secondary">Check Talent Onboarding</Button>
                </Link>
                <Link to={AppConfig.PATHS.Upgrades.Business.Onboarding}>
                    <Button theme="secondary">Check Business Onboarding</Button>
                </Link>
                {user ? (
                    <div className="">
                        <Button theme="secondary" onClick={handleLogout}>Logout</Button>
                    </div>
                ) : null}
            </div> */}

            <div>
                
            </div>
        </div>
    )
}

export default Home