import { useEffect } from "react"
import { InstagramIcon, LinkedInIcon, LocationIcon, TwitterIcon } from "../assets/svg"
import { Title } from "./Typography"

interface AccountReviewCardProps {
    name?: string,
    companyName?: string,
    website?: string,
    location?: string,
    profession?: string,
    avatar?: string,
    logo?: string,
    linkedIn?: string,
    instagram?: string,
    twitter?: string,
}


function AccountReviewCard({
    name = 'Enter your name',
    location = 'Enter your location',
    companyName = 'Enter your company\'s name',
    profession = 'Enter your profession',
    avatar = '',
    logo = '',
    website = 'Enter your company\'s website',
    linkedIn = '',
    instagram = '',
    twitter = '',
}: AccountReviewCardProps) {

    useEffect(() => {
        return () => {
            URL.revokeObjectURL(logo)
            URL.revokeObjectURL(avatar)
        }
    }, [])

    return (
        <div className="flex flex-col justify-center mt-32 items-center">
            <div className="bg-white p-10 mb-10 rounded-[5px] lg:min-w-[464px]">

                <div className="flex flex-col gap-2 justify-center items-center">
                    <img alt=""
                        src={avatar ? avatar : "/img/profile-circle.svg"}
                        className="rounded-full w-[96px h-[96px] object-cover" />
                    <Title className="!text-2xl">{name}</Title>
                    <p><span className="text-toolti">{profession}</span></p>
                </div>
                <hr className="border-grey-dark my-8" />


                <div className="">
                    <p className="uppercase text-tooltip">location</p>
                    <div className="my-5 flex gap-2 items-center">
                        <span><LocationIcon /></span>
                        <span>{location || 'Enter a location'}</span>
                    </div>
                </div>
                <hr className="border-grey-dark my-8" />


                <div className="">
                    <p className="uppercase text-tooltip">Company</p>
                    <div className="my-5 flex items-center gap-2">
                        <img alt=""
                            src={logo ? logo : "/img/company-profile.svg"}
                            className="w-8 h-8 object-fit" />
                        <div>
                            <div className="font-medium">{companyName}</div>
                            <div className="text-xs text-tooltip ">{website}</div>
                        </div>
                    </div>
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
                        {!twitter && !instagram && !linkedIn ? (
                            <p>Put in your socials (optional)</p>
                        ) : null}

                    </div>
                </div>
            </div>
        </div >
    )
}

export default AccountReviewCard