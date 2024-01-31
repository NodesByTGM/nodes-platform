import { Outlet } from "react-router-dom"

function Auth() {
    return (
        <div className="flex min-h-[100vh] justify-center">
            <div className="bg-primar p-20 px-24 pt-10 lg:w-1/2">
                <Outlet />
            </div>
            <div className="bg-light p-5 w-1/2 lg:block hidden">
                <div className="flex flex-col justify-center mt-20 items-center">
                    <div className="">
                        <img src="/img/auth1.png" alt="" className="w-[350px]" />
                        <img src="/img/auth2.png" alt="" className="w-[350px] relative -mt-20 ml-32" />
                        <img src="/img/auth3.png" alt="" className="w-[350px] relative -mt-20" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Auth
