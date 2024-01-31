import { useEffect, useRef, useState } from "react"
// import { CarretDownBoldIcon } from "../assets/svg"

interface SelectProps {
    className?: string,
    label?: string,
    onSelect?: ({ id, value }: { id: string, value: string }) => void,
    id?: string,
    placeholder?: string,
    required?: boolean,
    searchable?: boolean,
    options?: any[],
    optionType?: 'values' | 'objects'
}

function Select({
    className = '',
    label = '',
    onSelect = () => { },
    id = '',
    placeholder = '',
    // required = false,
    options = ['Option 1', 'Option 2'],
    optionType = 'values',
    searchable = false
}: SelectProps) {

    const wrapperRef = useRef<any>(null);
    const inputRef = useRef<any>(null);
    const [opened, setOpened] = useState(false)
    const [isFocused, setIsFocused] = useState(false)
    const [selected, setSelected] = useState<any>(placeholder)
    const [inputValue, setInputValue] = useState('');
    const [filtered, setFiltered] = useState(options);

    const handleSelect = (value: string) => {
        setSelected(value);
        setOpened(false)
    }

    const handleInputChange = (e: any) => {
        setOpened(true)
        setInputValue(e.target.value);
    };

    const handleClickOutside = (event: any) => {
        if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
            setIsFocused(false);
            setOpened(false)
        }
    };

    const handleInputKeyDown = () => {
        inputRef.current?.focus()
    };

    const toggleMenu = () => {
        setOpened(!opened)
        setIsFocused(true)
    }

    useEffect(() => {
        if (selected !== "Select") {
            onSelect({ id, value: selected })
            setIsFocused(false)
        }
    }, [selected])

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    useEffect(() => {
        setFiltered(options.filter((x: any) => {
            if (optionType === 'objects') {
                return x.name.toLowerCase().includes(inputValue.toLowerCase())
            }
            x.toLowerCase().includes(inputValue.toLowerCase())
        }))
    }, [inputValue])

    return (
        <div className={`group relative ${className}`} onClick={toggleMenu} ref={wrapperRef}>
            <div className='font-medium text-sm mb-1'>{label}</div>
            <div className={`flex justify-between items-center p-4 bg-transparent border border-grey-dark focus-visible:border-primary rounded-[5px]
                text-black text-sm transition-all cursor-pointer ${isFocused ? 'border-primary' : ''}`}>
                <div className={selected === placeholder ? 'text-placeholder' : ''}>
                    {typeof selected === 'object' ? selected.name : selected}
                </div>

            </div>

            {opened ? (
                <div className="mt-2 border border-primary rounded-[5px] relatve z-10 absolute w-full bg-white overflow-auto max-h-[280px]"
                    onKeyDown={handleInputKeyDown}>
                    {searchable ? (
                        <div className="p-2">
                            <input
                                type="text"
                                value={inputValue}
                                autoFocus
                                ref={inputRef}
                                onChange={handleInputChange}
                                placeholder="Search"
                                className={`p-2 outline-none py-2 w-full border rounded-lg`}
                            />
                        </div>
                    ) : null}
                    <ul>
                        {filtered.map((v: any, i: number) => (
                            <li key={i}
                                className="p-3 hover:bg-primary-light-hover cursor-pointer transition-all"
                                onClick={() => handleSelect(v)}>
                                {optionType === 'objects' ? v.name : v}
                            </li>
                        ))}
                    </ul>
                </div>
            ) : null}

        </div>
    )
}

export default Select