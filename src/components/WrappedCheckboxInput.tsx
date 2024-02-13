import clsx from "clsx"
import { Checkbox } from "."
import { CheckboxProps } from "../interfaces"

interface WrappedProps extends CheckboxProps {
    label: string,
    containerClass?: string
}
function WrappedCheckboxInput(props: WrappedProps) {
    const { label, containerClass } = props;
    return (
        <div className={clsx(
            'border focus:border-primary border-grey-dark rounded-[5px] transition-all p-4',
            'flex items-center gap-2',
            containerClass
        )}>
            <Checkbox {...props} size="lg" />
            <span>{label}</span>
        </div>
    )
}

export default WrappedCheckboxInput