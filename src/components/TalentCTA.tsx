import { Title } from "./Typography"

function TalentCTA() {
    return (
        <div className="flex flex-col justify-center mt-32 items-center">
            <div className="bg-white p-10 mb-10 rounded-[5px] max-w-[440px]">
                <Title className="!text-2xl mb-8">Join Nodes as a talent today!</Title>
                <p>Supercharge your creative journey at Nodes, where you can:</p>
                <ol className="p-5 flex flex-col gap-y-5 mt-5">
                    <li className="list-decimal">Showcase your talent globally and shine.</li>
                    <li className="list-decimal">Discover opportunities that match your skills.</li>
                    <li className="list-decimal">Collaborate with like-minded creators, fuel creativity.</li>
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

export default TalentCTA