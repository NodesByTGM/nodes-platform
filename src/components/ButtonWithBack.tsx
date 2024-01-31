import { Button } from "."
import { BackIcon } from "../assets/svg"

interface ButtonWithBackProps {
    btnText?: string,
    className?: string,
    btnAction: () => void,
    backAction: () => void,
    disabled?: boolean
}
function ButtonWithBack({
    className = '',
    btnText = 'Continue',
    disabled = false,
    btnAction,
    backAction,
}: ButtonWithBackProps) {
    return (
        <div className={className}>
            <div className="flex gap-2 items-center">
                <div className="cursor-pointer p-4 border border-grey-dark rounded-[5px]" onClick={backAction}>
                    <BackIcon />
                </div>
                <Button onClick={btnAction} disabled={disabled}>{btnText}</Button>
            </div>
        </div>
    )
}

export default ButtonWithBack