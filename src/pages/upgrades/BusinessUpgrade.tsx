import { Link } from "react-router-dom"
import { Button, Header } from "../../components"
import { Title } from "../../components/Typography"
import AppConfig from "../../utilities/config"

function BusinessUpgrade() {
  return (
    <div>
      <Header />
      <div className="p-32 pt-14">
        <div className="lg:w-[622px]">
          <div className="uppercase text-xs">For Business</div>
          <Title>Empower Your Brand, Connect with Creatives, Drive Innovation</Title>
          <p>
            Elevate your brand by partnering with a diverse community of skilled creatives, fostering innovation, and unlocking unparalleled opportunities.
          </p>
        </div>
        <div className="flex gap-5 my-5 items-center">
          <Link to={AppConfig.PATHS.Upgrades.Business.GetStarted}><Button compact className="uppercase">Get started for free</Button></Link>
          <Link to={AppConfig.PATHS.Upgrades.Talent.Base}><div className="cursor-pointer">Sign up as a talent instead?</div></Link>
        </div>

        <div>
          <img src="/img/business.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default BusinessUpgrade