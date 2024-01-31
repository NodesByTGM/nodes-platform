import { Link } from "react-router-dom"
import AppConfig from "../utilities/config"

function Footer() {
  return (
    <div className="text-sm bg-grey-footer">
      <div className="p-20 flex lg:flex-row flex-col justify-between">
        <div>
          <Link to="/">
            <div className="flex gap-2">
              <img src="/logo.svg" alt="" className="w-10 mb-10" />
              <h1 className="text-2xl font-semibold">Nodes</h1>
            </div>
          </Link>
          <div className="mb-10">
            <h1 className="font-semibold ">Address</h1>
            <p>{AppConfig.COMPANY_INFO.Address}</p>
          </div>

          <div>
            <h1 className="font-semibold ">Contact:</h1>
            <p className="underline"><a href={`tel:${AppConfig.COMPANY_INFO.Phone}`}>{AppConfig.COMPANY_INFO.Phone}</a></p>
            <p className="underline"><a href={`mailto:${AppConfig.COMPANY_INFO.Email}`}>{AppConfig.COMPANY_INFO.Email}</a></p>
          </div>

        </div>
        <div className="flex gap-5 text-md">
          <ul>
            <li><Link to={"#"}>Link</Link></li>
            <li><Link to={"#"}>Link</Link></li>
            <li><Link to={"#"}>Link</Link></li>
          </ul>
          <ul>
            <li><Link to={"#"}>Link</Link></li>
            <li><Link to={"#"}>Link</Link></li>
            <li><Link to={"#"}>Link</Link></li>
          </ul>
        </div>

      </div>
      <div className="px-20">

        <div className="border-t border-grey-dark py-5 flex justify-between">
          <p>© 2024 Nodes. All rights reserved.</p>
          <div className="flex gap-4">
            <Link to={"#"}>Privacy Policy</Link>
            <Link to={"#"}>Terms of Service</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer