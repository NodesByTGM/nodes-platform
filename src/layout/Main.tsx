import { Outlet } from "react-router-dom"
import { Footer, Header, SEO } from "../components"

function Main() {
    return (
        <div className="">
            <SEO />
            <Header />
            <div className="p-32">
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default Main