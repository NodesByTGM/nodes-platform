// import { SearchIcon } from "../assets/svgs/svg"
import { SearchbarProps } from "../interfaces"
import AppConfig from "../utilities/config"



function Searchbar({
    iconPosition = 'left',
    searchTerm,
    setSearchTerm,
    placeholder = AppConfig.PLACEHOLDERS.Searchbar }: SearchbarProps) {
    return (
        <div className="p-2 px-4 flex items-center rounded-lg lg:w-[500px] border border-[#F2F3F2] text-md gap-5 text-primary">
            {/* {iconPosition === 'left' ? <span><SearchIcon /></span> : null} */}
            <input
                className="w-full outline-none bg-transparent"
                value={searchTerm}
                placeholder={placeholder}
                onChange={e => setSearchTerm(e.target.value)} />
            {/* {iconPosition === 'right' ? <span><SearchIcon /></span> : null} */}
        </div>
    )
}

export default Searchbar