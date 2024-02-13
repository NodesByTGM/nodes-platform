import { Outlet } from "react-router-dom"
import { Footer, Header, SEO, Sidebar } from "../components"

function Main() {
    return (
        <div className="">
            <SEO />
            <Header />
            <div className="flex">
                <Sidebar />
                <div className="flex-1">
                    <div className="p-10 min-h-[80vh]">
                        <Outlet />
                    </div>
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default Main