
function Avatar({ src = '' }: { src?: string }) {
    return (
        <div className="rounded-full h-8 w-8 bg-gray-5 overflow-hidden cursor-pointer">
            {src ? <img src={src} alt="" className="object-cover rounded-full" /> : null}
        </div>
    )
}

export default Avatar