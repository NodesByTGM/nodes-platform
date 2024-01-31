import { Link as RouterLink } from 'react-router-dom'
import { ArrowRightIcon } from '../assets/svg'

function Link({ path, icon = false, label }: { path: string, label: string, icon: boolean }) {
    return (
        <RouterLink to={path} className='flex items-center gap-2 hover:underline underline-offset-2'>
            <span>{label}</span>
            {icon ? <span><ArrowRightIcon/></span> : null}
        </RouterLink>
    )
}

export default Link