import { Link } from "react-router-dom"
import { Button, Header } from "../../components"
import { Title } from "../../components/Typography"
import AppConfig from "../../utilities/config"

function TalentUpgrade() {
    return (
        <div>
            <Header />
            <div className="p-32 pt-14">
                <div className="uppercase text-xs">For Talents</div>
                <Title>Unlock Your Creative Potential with Nodes</Title>
                <p>
                    We believe in the power of every individual's creative spark. <br />
                    Join our thriving community of actors, artists, designers, writers, and visionaries. <br />
                    Your journey to success starts here.
                </p>
                <div className="flex gap-5 my-5 items-center">
                    <Link to={AppConfig.PATHS.Upgrades.Talent.GetStarted}><Button compact className="uppercase">Get started for free</Button></Link>
                    <Link to={AppConfig.PATHS.Upgrades.Business.Base}><div className="cursor-pointer">Sign up as a business instead?</div></Link>
                </div>

                <div>
                    <img src="/img/talent.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default TalentUpgrade