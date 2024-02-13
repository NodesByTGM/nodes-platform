import Avatar from "../Avatar"

function CommunityItem() {
    return (
        <div className="h-[200px] w-[300px] rounded p-6 border">
            <div className="mb-10">
                <div className="flex gap-4">
                    <Avatar src="/img/avatar2.png" />
                    <span>Directors room</span>
                </div>
                <div>Lorem ipsum dolor sit amet, cons ect etur adipiscing elit. </div>
            </div>
            <div className="flex items-center gap-2">
                <span>1 comment</span>
                <span className="w-1 h-1 rounded-full bg-grey-dark text-xs"></span>
                <span>34 interactions</span>
            </div>
        </div>
    )
}

export default CommunityItem