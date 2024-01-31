import { Title } from "./Typography"

function BusinessCTA() {
    return (
        <div className="flex flex-col justify-center mt-32 items-center">
            <div className="bg-white p-10 mb-10 rounded-[5px] max-w-[440px]">
                <Title className="!text-2xl mb-8">Ready to hire exceptional talent?</Title>
                <p>Transform your business's creative landscape with Nodes, unlocking the power to:</p>
                <ol className="p-5 flex flex-col gap-y-5 mt-5">
                    <li className="list-decimal">Discover New Talent.</li>
                    <li className="list-decimal">Engage In Strategic Partnerships.</li>
                    <li className="list-decimal">Highlight Brand Portfolio.</li>
                </ol>
            </div>
            <div className="">
                <div className="text-center uppercase mb-8 text-white text-md">
                    TRUSTED BY
                </div>
                <div className="flex justify-center items-center gap-5">
                    <img src="/img/grid-logo.svg" alt="" className="w-[90px]" />
                    <img src="/img/grid-logo.svg" alt="" className="w-[90px]" />
                    <img src="/img/grid-logo.svg" alt="" className="w-[90px]" />
                    <img src="/img/grid-logo.svg" alt="" className="w-[90px]" />
                </div>
            </div>
        </div>
    )
}

export default BusinessCTA