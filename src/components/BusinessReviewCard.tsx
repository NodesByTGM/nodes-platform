import { useEffect } from "react"
import { InstagramIcon, LinkedInIcon, TwitterIcon, WebIcon } from "../assets/svg"
import { Title } from "./Typography"

interface BusinessReviewCardProps {
    companyName?: string,
    logo?: string,
    linkedIn?: string,
    instagram?: string,
    twitter?: string,
    website?: string,
    size?: string,
    industry?: string,
    type?: string,
    tagline?: string,
}


function BusinessReviewCard({
    companyName = 'Enter your company\'s name',
    logo = '',
    linkedIn = '',
    instagram = '',
    twitter = '',
    website = '',
    size = 'Enter your company\'s size',
    industry = 'Enter your company\'s industry',
    tagline = 'Enter your company\'s tagline',
    type = 'Enter your company\'s type',
}: BusinessReviewCardProps) {

    useEffect(() => {
        return () => URL.revokeObjectURL(logo)
    }, [])
    return (
        <div className="flex flex-col justify-center mt-20 items-center">
            <div className="bg-white p-10 mb-10 rounded-[5px] lg:min-w-[464px]">

                <div className="flex flex-col gap-10 justify-center items-center">
                    <img alt=""
                        src={logo ? logo : "/img/company-profile.svg"}
                        className="w-[54px h-[48px] blend-exclusion object-fit" />
                    <Title className="!text-2xl">{companyName}</Title>

                </div>
                <div className="my-5 flex gap-2 items-center justify-center">
                    <span><WebIcon /></span>
                    <span>{website}</span>
                </div>
                <hr className="border-grey-dark my-8" />
                <p>{tagline}</p>
                <hr className="border-grey-dark my-8" />

                <div className="">
                    <p className="uppercase text-tooltip">industry</p>
                    <div className="my-5">{industry}</div>
                </div>
                <hr className="border-grey-dark my-8" />

                <div className="">
                    <p className="uppercase text-tooltip">company size</p>
                    <span>{size}</span>
                </div>
                <hr className="border-grey-dark my-8" />


                <div className="">
                    <p className="uppercase text-tooltip">company type</p>
                    <span>{type}</span>
                </div>
                <hr className="border-grey-dark my-8" />

                <div className="">
                    <p className="uppercase text-tooltip">SOCIAL MEDIA</p>
                    <div className="my-5 flex items-center gap-4">
                        {linkedIn ? (
                            <a href={linkedIn} target="_blank" rel="noopener noreferrer">
                                <LinkedInIcon />
                            </a>
                        ) : null}
                        {instagram ? (
                            <a href={instagram} target="_blank" rel="noopener noreferrer">
                                <InstagramIcon />
                            </a>
                        ) : null}
                        {twitter ? (
                            <a href={twitter} target="_blank" rel="noopener noreferrer">
                                <TwitterIcon />
                            </a>
                        ) : null}


                    </div>
                </div>
            </div>
        </div >
    )
}

export default BusinessReviewCard